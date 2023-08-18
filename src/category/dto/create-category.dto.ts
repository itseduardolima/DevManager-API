import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';

export class CreateCategoryDto extends OmitType(Category, ['category_id']) {
  @ApiProperty()
  name: string;
}
