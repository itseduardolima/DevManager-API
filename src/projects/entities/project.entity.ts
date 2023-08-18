import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('projects')
export class Project {
  @ObjectIdColumn()
  project_id: ObjectId;

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
