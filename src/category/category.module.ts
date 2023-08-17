import { Module } from '@nestjs/common';
import { CategoryService } from './shared/category.service';
import { CategoryController } from './controller/category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
