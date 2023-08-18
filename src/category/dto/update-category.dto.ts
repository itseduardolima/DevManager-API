import { OmitType, ApiProperty } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';

export class UpdateCategoryDto extends OmitType(Category, ['category_id']) {
  @ApiProperty()
  name: string;
}
