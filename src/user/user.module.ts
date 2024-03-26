import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './user.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class UserModule {}
