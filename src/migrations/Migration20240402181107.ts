import { Migration } from '@mikro-orm/migrations';

export class Migration20240402181107 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "authors" ("id" serial primary key, "name" varchar(255) not null, "age" int not null);');

    this.addSql('drop table if exists "author" cascade;');
  }

  async down(): Promise<void> {
    this.addSql('create table "author" ("id" serial primary key, "name" varchar(255) not null, "age" int not null);');

    this.addSql('drop table if exists "authors" cascade;');
  }

}
