import { Controller, Post } from '@nestjs/common';
import { AuthService } from './user.service';

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.login();
  }
}