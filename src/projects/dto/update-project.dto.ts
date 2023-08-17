import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  name: string;

  budget: string;

  cost: number;

  category_id: number;

  service_id: number;
}
