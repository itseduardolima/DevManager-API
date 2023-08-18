import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { Project } from '../entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async findAll() {
    return this.projectRepository.find();
  }

  async getById(id: string): Promise<Project> {
    return await this.projectRepository.findOne({ where: { project_id: id } });
  }

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  async update(id: string, updateProjectDto: UpdateProjectDto) {
    const project = await this.getById(id);

    if (!project) {
      throw new NotFoundException('Id invalido!');
    }

    this.projectRepository.merge(project, updateProjectDto);

    return this.projectRepository.save(project);
  }

  async remove(id: string) {
    await this.projectRepository.delete(id);
  }
}
