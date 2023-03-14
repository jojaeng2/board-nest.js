import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user_create.dto';
import { UsersService } from './user.service';
import { User } from './users.entity';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getHello(): string {
    return 'Hello! userController';
  }

  @Post()
  async createUser(@Body() userCreateDto: UserCreateDto) {
    await this.userService.createUser(userCreateDto);
    return;
  }

  @Get(':email')
  async findUserByEmail(@Param() params): Promise<User> {
    const { email } = params;
    console.log(email)
    return this.userService.findByEmail(email);
  }
}
