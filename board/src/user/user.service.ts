import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user_create.dto';
import { UsersRepository } from './user.repository';
import { User } from './users.entity';
import { DataSource } from 'typeorm';
import { UserFindByEmailDto } from './dto/user_findByEmail.dto';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
    private dataSource: DataSource,
  ) {}

  async createUser(userCreateDto: UserCreateDto) {
    const { name, email, password, age } = userCreateDto;
    const user: User = new User(name, email, password, age);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await this.userRepository.save(user);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async findByEmail(email: string): Promise<User> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = await this.userRepository.findOneBy({ email: email });
      await queryRunner.commitTransaction();
      console.log(user);
      if (user == null) throw new Error('없는 회원 정보입니다.');
      return user;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
