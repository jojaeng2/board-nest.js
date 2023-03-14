import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user_create.dto';
import { UsersService } from './user.service';

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
}
