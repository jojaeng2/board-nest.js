import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user_create.dto';
import { UserService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getHello(): string {
    return 'Hello! userController';
  }

  @Post()
  async createUser(@Body() userCreateDto: UserCreateDto) {
    this.userService.createUser(userCreateDto);
    return;
  }
}
