import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Service {
  
  @ObjectIdColumn()
  service_id: number;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  description: string;
}
