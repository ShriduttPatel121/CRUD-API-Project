import { Logger } from "@nestjs/common"
import { type Options, PostgreSqlDriver } from "@mikro-orm/postgresql"
import { TsMorphMetadataProvider } from "@mikro-orm/reflection"
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import path from "path";
import Entities from "./db/entities";
import { Migrator } from "@mikro-orm/migrations"
const logger = new Logger('MikroORM')

const entityPath = path.join(__dirname, '.', 'db', 'entities');
const config: Options = {
    entities: Entities,
    dbName:'mydatabase',
    host: 'localhost',
    // port: 5432,
    user: 'myuser',
    password: 'mypassword',
    schema: 'public',
    highlighter: new SqlHighlighter(),
    debug: true, // for prod, need to disable it
    driver: PostgreSqlDriver,
    extensions: [Migrator],
    logger: logger.log.bind(logger),
    metadataProvider: TsMorphMetadataProvider
}

export default config;