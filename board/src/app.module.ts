import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../typeormConfig';
import { UsersModule } from './user/users.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UsersModule, CommentModule, TypeOrmModule.forRoot(typeormConfig)],
})
export class AppModule {}
