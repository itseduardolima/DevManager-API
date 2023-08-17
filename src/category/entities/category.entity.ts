import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Category {

  @ObjectIdColumn()
  category_id: ObjectId;

  @Column()
  name: string;
}
