import { Global, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from 'src/mikro-orm.config';
import Entities from 'src/db/entities';

@Global()
@Module({
  imports: [
    // MikroOrmModule.forRoot(config),
    // ConfigModule.forRoot(),
    MikroOrmModule.forRootAsync({
      useFactory: async () => {
        // could use AWS KMS for managing environment variables securely
        console.log('process.env.DB_NAME ', process.env);
        return {
          ...config,
          dbName: process.env.DB_NAME,
          host: process.env.HOST,
          port: parseInt(process.env.DB_PORT),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        };
      },
    }),
    MikroOrmModule.forFeature(Entities),
  ],
  exports: [MikroOrmModule],
})
export default class MikroORMMoDule {}
