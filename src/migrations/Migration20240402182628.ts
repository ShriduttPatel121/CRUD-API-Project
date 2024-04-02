import { Migration } from '@mikro-orm/migrations';

export class Migration20240402182628 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "comment" ("id" serial primary key, "text" varchar(1000) not null, "test_field" varchar(10) not null);');

    this.addSql('create table "post" ("id" serial primary key, "title" varchar(255) not null, "description" varchar(255) not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "comment" cascade;');

    this.addSql('drop table if exists "post" cascade;');
  }

}
