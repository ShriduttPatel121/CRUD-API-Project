import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import MikroORMMoDule from './MikroORM/mikro-orm.module';
@Module({
  imports: [
    MikroORMMoDule,
    AuthModule, 
    UserModule, 
    BookmarkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
