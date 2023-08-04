import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private category: CategoryService) {}

  @Post()
  createCategory(@Body() data: { id: string; name: string }): Promise<any> {
    return this.category.createCategory(data);
  }

  @Get()
  getCategory() {
    return this.category.getCategory();
  }

  @Patch(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() data: { name: string; id: string },
  ): Promise<any> {
    return this.category.updateCategory(id, data);
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    this.category.deleteCategory(id);
    return `Category with id ${id} has been deleted`;
  }
}
