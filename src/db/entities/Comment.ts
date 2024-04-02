import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Comment {
    @PrimaryKey({ autoincrement: true }) id!: number;

  @Property({ length: 1000 })
  text!: string;

  @Property({ length: 10 })
  testField: string;

}