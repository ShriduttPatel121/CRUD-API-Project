import { Body, Controller, ForbiddenException, NotFoundException, Post } from '@nestjs/common';
import { AuthService } from './user.service';
import { JwtService } from "@nestjs/jwt";

import { AuthDto } from './dto';
import { NotFoundError, UniqueConstraintViolationException } from '@mikro-orm/core';
import { InvalidPassword } from './types';
import { SkipAuth } from 'src/decorators/SkipAuth.decorator';


@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
    ) {}

  @Post('signup')
  @SkipAuth()
  async signup(@Body() dto: AuthDto) {
    try {
      return await this.authService.signup(dto);
    } catch(error) {
      if(error instanceof UniqueConstraintViolationException) {
        throw new ForbiddenException("username already taken")
      }
      throw error;
    }
  }

  @Post('signin')
  @SkipAuth()
  async signin(@Body() dto: AuthDto) {
    try {
      const user = await this.authService.login(dto);
      const payload = { id: user.id, name: user.username };
      const accessToken = this.jwtService.sign(payload);
      // TODO: send refreshToken to http only cookie
      return { user, accessToken }
    } catch(error) {
      if(error instanceof NotFoundError) {
        throw new NotFoundException("user does not exist");
      } else if(error instanceof InvalidPassword) {
        throw new ForbiddenException(error.message);
      }
    }
  }


}
