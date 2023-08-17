import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ServicesModule } from './services/services.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ProjectsModule, ServicesModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
