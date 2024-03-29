import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './user.service';
import MikroORMMoDule from 'src/MikroORM/mikro-orm.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class UserModule {}
