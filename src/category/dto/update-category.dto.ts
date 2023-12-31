import { IsNotEmpty, IsString } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  id: string;
}
