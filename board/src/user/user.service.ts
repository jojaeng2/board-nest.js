import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user_create.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  createUser(userCreateDto: UserCreateDto): void {


  }
}
