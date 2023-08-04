import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private user: UsersService) {}

  @Post()
  createUser(@Body() data: { name: string; categoryId: string }): Promise<any> {
    return this.user.createUser(data);
  }

  @Get()
  getUsers() {
    return this.user.getUsers();
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() data: { name: string; categoryId: string },
  ): Promise<any> {
    return this.user.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    this.user.deleteUser(id);
    return `User with id ${id} has been deleted`;
  }
}
