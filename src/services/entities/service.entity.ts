import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Service {
  
  @ObjectIdColumn()
  service_id: string;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  description: string;
}
