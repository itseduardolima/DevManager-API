import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ProjectsModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
