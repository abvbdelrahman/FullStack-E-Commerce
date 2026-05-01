import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import multer from 'multer';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  private readonly upload = multer({ storage });
  @Post('add')
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtAuthGuard)
  create(@Body() body: any, @UploadedFile() file: Express.Multer.File) {
    return this.productsService.create(body, file);
  }
  @Get('list')
  getAll() {
    return this.productsService.getAll();
  }

  @Get('category/:category')
  getAllByCategory(@Param('category') category: string) {
    return this.productsService.getAllByCategory(category);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.getOne(id);
  }
  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productsService.removeProduct(id);
  }
}
