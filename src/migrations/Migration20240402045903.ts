import { Migration } from '@mikro-orm/migrations';

export class Migration20240402045903 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "bookmarks" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null, "description" varchar(255) not null, "user_id" int not null);');

    this.addSql('alter table "bookmarks" add constraint "bookmarks_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');

    this.addSql('drop table if exists "bookmark" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "bookmark" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) not null, "description" varchar(255) not null, "user_id" int not null);');

    this.addSql('alter table "bookmark" add constraint "bookmark_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');

    this.addSql('drop table if exists "bookmarks" cascade;');
  }

}
