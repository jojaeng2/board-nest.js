import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user_create.dto';

@Controller('user')
export class UsersController {
  @Get()
  getHello(): string {
    return 'Hello! userController';
  }

  @Post()
  async createUser(@Body() userCreateDto: UserCreateDto) {
    console.log(userCreateDto);
    return;
  }
}
