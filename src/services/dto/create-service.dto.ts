import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Service } from '../entities/service.entity';

export class CreateServiceDto extends OmitType(Service, ['service_id']) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  description: string;
}
