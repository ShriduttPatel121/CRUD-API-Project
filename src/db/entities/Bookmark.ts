import { BeforeCreate, BeforeUpdate, Entity, EventArgs, ManyToOne, OneToMany, PrimaryKey, Property,  } from '@mikro-orm/core';
import { BaseEntity } from './entity';
import { User } from './user';

@Entity({ tableName: 'bookmarks' })
export class Bookmark extends BaseEntity {

  @Property()
  title: string;

  @Property()
  description: string;

  @ManyToOne()
  user: User;

  // Other properties and relationships can be added here
}