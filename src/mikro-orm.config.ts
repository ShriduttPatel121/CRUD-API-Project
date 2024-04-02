import { Logger } from '@nestjs/common';
import {
  LoadStrategy,
  type Options,
  PostgreSqlDriver,
} from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import Entities from './db/entities';
import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
const logger = new Logger('MikroORM');

const config: Options = {
  entities: Entities,
  dbName: 'mydatabase',
  host: 'localhost',
  port: 5432,
  user: 'myuser',
  password: 'mypassword',
  schema: 'public',
  highlighter: new SqlHighlighter(),
  debug: true, // for prod, need to disable it
  driver: PostgreSqlDriver,
  extensions: [Migrator],
  logger: logger.log.bind(logger),
  metadataProvider: TsMorphMetadataProvider,
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    path: './dist/migrations', // path to the folder with migrations
    pathTs: './src/migrations', // path to the folder with TS migrations (if used, you should put path to compiled files in `path`)
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: false, // allow to disable table and column dropping
    snapshot: true, // save snapshot when creating new migrations
    emit: 'ts', // migration generation mode
    generator: TSMigrationGenerator, // migration generator, e.g. to allow custom formatting
  },
  // disableTransactions: true
};

export default config;
