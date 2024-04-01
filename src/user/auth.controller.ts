import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './user.service';

import { AuthDto } from './dto';


@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
