import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../typeormConfig';
import { UsersModule } from './user/users.module';
import { CommentModule } from './comment/comment.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    UsersModule,
    CommentModule,
    BoardModule,
    TypeOrmModule.forRoot(typeormConfig),
  ],
})
export class AppModule {}
