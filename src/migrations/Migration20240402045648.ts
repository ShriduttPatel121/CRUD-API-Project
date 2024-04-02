import { Migration } from '@mikro-orm/migrations';

export class Migration20240402045648 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "name" to "username";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" rename column "username" to "name";');
  }

}
