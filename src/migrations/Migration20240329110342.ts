import { Migration } from '@mikro-orm/migrations';

export class Migration20240329110342 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "comment" add column "test_field" varchar(10) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "comment" drop column "test_field";');
  }

}
