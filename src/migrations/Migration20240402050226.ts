import { Migration } from '@mikro-orm/migrations';

export class Migration20240402050226 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "bookmarks" drop constraint "bookmarks_user_id_foreign";');

    this.addSql('create table "users" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "username" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "users" add constraint "users_username_unique" unique ("username");');

    this.addSql('drop table if exists "user" cascade;');

    // this.addSql('alter table "bookmarks" drop constraint "bookmarks_user_id_foreign";');

    this.addSql('alter table "bookmarks" add constraint "bookmarks_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "bookmarks" drop constraint "bookmarks_user_id_foreign";');

    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "username" varchar(255) not null, "password" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');

    this.addSql('drop table if exists "users" cascade;');

    this.addSql('alter table "bookmarks" drop constraint "bookmarks_user_id_foreign";');

    this.addSql('alter table "bookmarks" add constraint "bookmarks_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');
  }

}
