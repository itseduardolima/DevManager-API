import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Project {
  @ObjectIdColumn()
  project_id: number;

  @Column()
  name: string;

  @Column()
  budget: string;

  @Column()
  cost: number;

  @Column()
  category_id: number;

  @Column()
  service_id: number;
}
