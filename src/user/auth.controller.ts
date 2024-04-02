import { Body, Controller, ForbiddenException, NotFoundException, Post } from '@nestjs/common';
import { AuthService } from './user.service';

import { AuthDto } from './dto';
import { NotFoundError, UniqueConstraintViolationException } from '@mikro-orm/core';
import { InvalidPassword } from './types';


@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
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
  async signin(@Body() dto: AuthDto) {
    try {
      return await this.authService.login(dto);
    } catch(error) {
      if(error instanceof NotFoundError) {
        throw new NotFoundException("user does not exist");
      } else if(error instanceof InvalidPassword) {
        throw new ForbiddenException(error.message);
      }
    }
  }
}
