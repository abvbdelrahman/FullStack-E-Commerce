import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PlaceOrderDto } from './dto/place-order.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('place')
  placeOrder(@Req() req, @Body() dto: PlaceOrderDto) {
    return this.ordersService.placeOrder(req.user.id, dto);
  }

  @Post('verify')
  verifyPayment(@Body() body: any) {
    return this.ordersService.verifyPayment(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('userorders')
  getMyOrders(@Req() req) {
    return this.ordersService.getUserOrders(req.user.id);
  }

  @Get('list')
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Patch('status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.ordersService.updateOrderStatus(id, status);
  }
}