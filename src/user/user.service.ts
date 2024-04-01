import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository, FlushMode } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/db/entities/user';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
  
  constructor(@InjectRepository(User) private readonly userRepository: EntityRepository<User>,
  private readonly em: EntityManager

  ) { }

  
  login() {
    return 'I am at sing in';
  }

  async signup(dto: AuthDto) {
    const user = this.userRepository.create({ name: dto.name, password: dto.password });
    // this.em.begin()
    // const insert = this.userRepository.insert({ name: dto.name, password: dto.password },);
    await this.em.flush();
    return user;
  }
}
