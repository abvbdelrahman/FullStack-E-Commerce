import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginDto } from '../users/dto/login.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() body: LoginDto) {
    return this.adminService.login(body);
  }
}
