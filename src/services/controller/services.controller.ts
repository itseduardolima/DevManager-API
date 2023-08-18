import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ServicesService } from '../shared/services.service';
import { CreateServiceDto } from '../dto/create-service.dto';
import { UpdateServiceDto } from '../dto/update-service.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Services')
@Controller('services')
export class ServicesController {
  constructor(private readonly services: ServicesService) {}

  @Get()
  async findAll() {
    return this.services.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.services.getById(id);
  }

  @Post()
  async create(@Body() createProjectDto: CreateServiceDto) {
    return this.services.create(createProjectDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProjectDto: UpdateServiceDto) {
    return this.services.update(id, updateProjectDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.services.remove(id);
  }
}
