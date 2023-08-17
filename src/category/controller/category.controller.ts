import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CategoryService } from '../shared/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly category: CategoryService) {}

  @Get()
  async findAll() {
    return this.category.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.category.getById(id);
  }

  @Post()
  async create(@Body() createProjectDto: CreateCategoryDto) {
    return this.category.create(createProjectDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateCategoryDto) {
    return this.category.update(id, updateProjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.category.remove(id);
  }
}
