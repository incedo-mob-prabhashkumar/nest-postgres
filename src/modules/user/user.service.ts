import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';


@Injectable()
export class UserService {
 constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
