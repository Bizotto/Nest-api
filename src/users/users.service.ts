import { Body, Injectable, Param } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(@Body() data: CreateUserDto): Promise<any> {
    const { name, categoryId } = data;

    const user = await this.prisma.user.create({
      data: {
        name,
        category_id: categoryId,
      },
    });
    return user;
  }

  async getUsers() {
    const user = await this.prisma.user.findMany();

    const categories = await this.prisma.category.findMany();

    const users = user.map((user) => {
      const category = categories.find(
        (category) => category.id === user.category_id,
      );
      return { ...user, category };
    });

    return users;
  }

  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    const { name, categoryId } = data;
    const user = await this.prisma.user.update({
      where: { id: id },
      data: {
        name,
        category_id: categoryId,
      },
    });
    return user;
  }

  async deleteUser(@Param('id') id: string) {
    await this.prisma.user.delete({
      where: {
        id: id,
      },
    });

    return;
  }
}
