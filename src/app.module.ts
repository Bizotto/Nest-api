import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaService } from './database/prisma.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CategoryModule, UsersModule],
  providers: [PrismaService],
})
export class AppModule {}
