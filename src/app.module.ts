import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import MikroORMMoDule from './MikroORM/mikro-orm.module';
import { ConfigModule } from '@nestjs/config';
import { JwtConfigModule } from './Jwt/Jwt.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './Jwt/auth.guard';
import { MikroORM } from '@mikro-orm/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtConfigModule,
    MikroORMMoDule,
    AuthModule,
    UserModule,
    BookmarkModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly orm: MikroORM) {}

  async onModuleInit() {
    const migrationResult = await this.orm.migrator.createMigration();
    console.log("migrationResult :   ", migrationResult);
    this.orm.migrator.up().then(() => {
      console.log('Migrations executed successfully!');
    });
    
  }
}
