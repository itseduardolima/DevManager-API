import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @ObjectIdColumn()
  project_id: string;

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
