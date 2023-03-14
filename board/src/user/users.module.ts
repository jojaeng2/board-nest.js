import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';

@Module({
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
