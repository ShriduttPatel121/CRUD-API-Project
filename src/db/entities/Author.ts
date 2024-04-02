import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'authors' })
export class Author {
  @PrimaryKey({autoincrement: true})
  id!: number;

  @Property()
  name!: string;

  @Property()
  age!: number;

  // Other properties and relationships can be added here
}