import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  categoryId: string;
}
