import { Module } from '@nestjs/common';
import { ProjectsController } from './controller/projects.controller';
import { ProjectService } from './shared/projects.service';
import { Project } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [ProjectService],
})
export class ProjectsModule {}
