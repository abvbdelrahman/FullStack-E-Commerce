import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: string, addToCartDto: AddToCartDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    const cartData = user.cartData || {};
    if (!cartData[addToCartDto.productId]) {
      cartData[addToCartDto.productId] = 0;
    } else {
      cartData[addToCartDto.productId] += addToCartDto.quantity;
    }

    // Verify product exists
    const product = await this.prisma.product.findUnique({
      where: { id: addToCartDto.productId },
    });

    if (!product) {
      return {
        success: false,
        message: 'Product not found',
      };
    }

    // Update user with new cart data
    await this.prisma.user.update({
      where: { id: userId },
      data: { cartData },
    });

    return {
      success: true,
      message: 'Item added to cart successfully',
    };
  }

  async removeFromCart(userId: string, productId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    if (!productId) {
      return {
        success: false,
        message: 'Product ID is required',
      };
    }
    const cartData = user.cartData || {};

    // Check if product exists in cart
    if (!cartData[productId]) {
      return {
        success: false,
        message: 'Product not found in cart',
      };
    } else {
      cartData[productId] -= 1;
      if (cartData[productId] <= 0) {
        delete cartData[productId];
      }
    }

    // Update user with new cart data
    await this.prisma.user.update({
      where: { id: userId },
      data: { cartData },
    });

    return {
      success: true,
      message: 'Item removed from cart successfully',
    };
  }

  async removeAllCart(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    // Clear all cart data
    await this.prisma.user.update({
      where: { id: userId },
      data: { cartData: {} },
    });

    return {
      success: true,
      message: 'Cart cleared successfully',
    };
  }

  async getCart(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return {
        success: false,
        message: 'User not found',
      };
    }

    const cartData = user.cartData || {};

    return {
      success: true,
      message: 'Cart fetched successfully',
      data: {
        cartData,
      },
    };
  }
}
