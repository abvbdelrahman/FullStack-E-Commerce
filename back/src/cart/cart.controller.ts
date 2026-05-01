import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { CartService } from './cart.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

interface AuthenticatedRequest extends Request {
  user?: {
    sub?: string;
    id?: string;
  };
}

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  private getUserId(req: AuthenticatedRequest): string {
    const userId = req.user?.sub || req.user?.id;
    if (!userId) {
      throw new BadRequestException('User ID is missing from request');
    }
    return userId;
  }

  @Post('add')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  async addToCart(
    @Req() req: AuthenticatedRequest,
    @Body() addToCartDto: AddToCartDto,
  ) {
    const userId = this.getUserId(req);
    return await this.cartService.addToCart(userId, addToCartDto);
  }

  @Delete('remove')
  @UseGuards(JwtAuthGuard)
  async removeFromCart(
    @Req() req: AuthenticatedRequest,
    @Body('productId') productId: string,
  ) {
    const userId = this.getUserId(req);
    return await this.cartService.removeFromCart(userId, productId);
  }

  @Delete('clear')
  @UseGuards(JwtAuthGuard)
  async removeAllCart(@Req() req: AuthenticatedRequest) {
    const userId = this.getUserId(req);
    return await this.cartService.removeAllCart(userId);
  }

  @Get('get')
  @UseGuards(JwtAuthGuard)
  async getCart(@Req() req: AuthenticatedRequest) {
    const userId = this.getUserId(req);
    return await this.cartService.getCart(userId);
  }
}
