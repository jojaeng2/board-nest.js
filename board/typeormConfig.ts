import { DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './src/user/users.entity';
import { CommentEntity } from './src/comment/comment.entity';
import { Board } from './src/board/board.entity';

export const typeormConfig: TypeOrmModuleOptions | DataSourceOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'ds4ouj',
  password: '1234',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [User, CommentEntity, Board],
};
