import { Module } from '@nestjs/common';
import { ServicesService } from './shared/services.service';
import { ServicesController } from './controller/services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
