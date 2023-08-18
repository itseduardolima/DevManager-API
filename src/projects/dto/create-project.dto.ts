import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Project } from '../entities/project.entity';

export class CreateProjectDto extends OmitType(Project, ['project_id']) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  budget: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  service_id: number;
}
