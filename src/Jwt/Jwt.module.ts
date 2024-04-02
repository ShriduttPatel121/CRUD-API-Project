import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    imports: [JwtModule.registerAsync({
        useFactory: () => ({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: process.env.JWT_EXPIRATION_IN_MS
            },
            
        })
    })],
    exports: [JwtModule]
})
export class JwtConfigModule {}