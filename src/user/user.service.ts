import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository, UniqueConstraintViolationException } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { User } from 'src/db/entities/user';
import { AuthDto } from './dto';
import { InvalidPassword } from './types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  
  constructor(@InjectRepository(User) private readonly userRepository: EntityRepository<User>,
  private readonly em: EntityManager,
  private configService: ConfigService
  ) { }

  
  async login(dto: AuthDto) {
    try {
      const user = await this.userRepository.findOneOrFail(
        { username: dto.username }, 
        { populate: ['password'], exclude: ['bookmarks', 'createdAt', 'updatedAt']}
      );

      if(!(await user.verifyPassword(dto.password))) {
        throw new InvalidPassword("username or password is incorrect");
      }
      return user;
    } catch(error) {
      console.log("LOGIN ERROR: ", error.name);
      throw error;
    }
  }

  async signup(dto: AuthDto) {
    try {
      const user = this.userRepository.create({ username: dto.username, password: dto.password });
      // this.em.begin()
      // const insert = this.userRepository.insert({ name: dto.name, password: dto.password },);
      // this.em.commit();
      await this.em.flush();
      return user;
    } catch(error) {
      // this.em.rollback();
      console.log("SIGNUP ERROR: ", error.name);
      throw error;
    }
  }
}
