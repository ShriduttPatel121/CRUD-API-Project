import { Logger } from "@nestjs/common"
import { LoadStrategy, type Options, PostgreSqlDriver } from "@mikro-orm/postgresql"
import { TsMorphMetadataProvider } from "@mikro-orm/reflection"
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import path from "path";
import Entities from "./db/entities";
import { Migrator } from "@mikro-orm/migrations"
const logger = new Logger('MikroORM')

const config: Options = {
    entities: Entities,
    // dbName:'mydatabase',
    // host: 'localhost',
    // port: 5432,
    // user: 'myuser',
    // password: 'mypassword',
    schema: 'public',
    highlighter: new SqlHighlighter(),
    debug: true, // for prod, need to disable it
    driver: PostgreSqlDriver,
    extensions: [Migrator],
    logger: logger.log.bind(logger),
    metadataProvider: TsMorphMetadataProvider,
    loadStrategy: LoadStrategy.JOINED,
    // disableTransactions: true
}

export default config;