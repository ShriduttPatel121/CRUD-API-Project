import { Global, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from 'src/mikro-orm.config';
import Entities from 'src/db/entities';

@Global()
@Module({
    imports: [
        MikroOrmModule.forRoot(config),
        MikroOrmModule.forFeature(Entities)
    ],
    exports: [MikroOrmModule]
})
export default class MikroORMMoDule {}