import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { Service } from '../entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async findAll() {
    return this.serviceRepository.find();
  }

  async getById(id: string) {
    const service = await this.serviceRepository
      .createQueryBuilder('service')
      .where('service.service_id = :id', { id })
      .getOne();
    if (!service) {
      throw new NotFoundException('Id inválido.');
    }
    return service;
  }

  async create(createService: CreateServiceDto) {
    const service = this.serviceRepository.create(createService);
    return this.serviceRepository.save(service);
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    const service = await this.getById(id);

    if (!service) {
      throw new NotFoundException('Id invalido!');
    }

    this.serviceRepository.merge(service, updateServiceDto);

    return this.serviceRepository.save(service);
  }

  async remove(id: string) {
    await this.serviceRepository.delete(id);
  }
}
