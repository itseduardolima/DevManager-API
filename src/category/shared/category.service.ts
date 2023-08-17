import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll() {
    return this.categoryRepository.find();
  }

  async getById(id: string) {
    const category = await this.categoryRepository
      .createQueryBuilder('category')
      .where('category.category_id = :id', { id })
      .getOne();
    if (!category) {
      throw new NotFoundException('Id inválido.');
    }
    return category;
  }

  async create(createCategory: CreateCategoryDto) {
    const project = this.categoryRepository.create(createCategory);
    return this.categoryRepository.save(project);
  }

  async update(id: string, updateCategory: UpdateCategoryDto) {
    const project = await this.getById(id);

    if (!project) {
      throw new NotFoundException('Id invalido!');
    }

    this.categoryRepository.merge(project, updateCategory);

    return this.categoryRepository.save(project);
  }

  async remove(id: string) {
    await this.categoryRepository.delete(id);
  }
}
