import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './user.service';
import { Request } from 'express';


@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Req() req: Request) {

    console.log(req.body);
    return req.body;
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
