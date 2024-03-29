import { Entity, PrimaryKey, Property,  } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey({autoincrement: true})
  id!: number;

  @Property()
  name!: string;

  @Property({ onCreate(entity, em) {
    
  }, })
  password!: string;

  // Other properties and relationships can be added here
}