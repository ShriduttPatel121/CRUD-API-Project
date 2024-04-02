import { BeforeCreate, BeforeUpdate, Collection, Entity, EventArgs, ManyToOne, OneToMany, PrimaryKey, Property  } from '@mikro-orm/core';
import { hash, verify } from "argon2"
import { BaseEntity } from './entity';
import { Bookmark } from './Bookmark';

@Entity({ tableName: 'users' })
export class User extends BaseEntity {

  @Property({ unique: true })
  username: string;

  @Property({ hidden: true, lazy: true })
  password: string;

  @OneToMany({ mappedBy: 'user' })
  bookmarks = new Collection<Bookmark>(this);
  
  @BeforeCreate()
  @BeforeUpdate()
  async hashPassword(args: EventArgs<User>) {
    // hash only if the password was changed
    const password = args.changeSet?.payload.password;

    if (password) {
      this.password = await hash(password);
    }
  }

  async verifyPassword(password: string) {
    return verify(this.password, password);
  }
}