import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createUser(data: { name: string; email: string; password: string }) {
    return this.prisma.user.create({ data });
  }

  getAllUsers() {
    return this.prisma.user.findMany();
  }
}