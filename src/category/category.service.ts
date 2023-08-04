import { Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CreateCategoryDto): Promise<CreateCategoryDto> {
    const { name } = data;
    const category = await this.prisma.category.create({
      data: {
        name,
      },
    });
    return category;
  }

  async getCategory() {
    const category = await this.prisma.category.findMany();
    return category;
  }

  async updateCategory(
    @Param('id') id: string,
    data: UpdateCategoryDto,
  ): Promise<UpdateCategoryDto> {
    const { name } = data;
    const category = await this.prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return category;
  }

  async deleteCategory(@Param('id') id: string) {
    await this.prisma.category.delete({
      where: {
        id: id,
      },
    });
    return;
  }
}
