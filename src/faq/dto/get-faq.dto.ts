import { IsEnum } from 'class-validator';
import { FAQ_ENUM } from './create-faq.dto';

export class FilterByCategoryDto {
  @IsEnum(FAQ_ENUM, {
    message: 'La categoría no es válida',
  })
  category: string;
}
