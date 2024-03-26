import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  constructor() {}
  login() {
    return 'I am at sing in';
  }

  signup() {
    return 'I am at sing up';
  }
}
