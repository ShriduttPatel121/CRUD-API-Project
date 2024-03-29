import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Author } from 'src/db/entities/Author';

@Injectable({})
export class AuthService {
  
  constructor(@InjectRepository(Author) private readonly authorRepository: EntityRepository<Author>,
  private readonly em: EntityManager) { }

  
  login() {
    return 'I am at sing in';
  }

  signup() {
    this.authorRepository.create({
      name: 'Narendra'
    });
    this.authorRepository.insert({ name: 'Shridutt' })
    this.em.flush();
    return 'I am at sing up';
  }
}
