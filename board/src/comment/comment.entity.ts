import { Column, Entity, ManyToOne, PrimaryColumn, Timestamp } from 'typeorm';
import { User } from '../user/users.entity';
import { Board } from '../board/board.entity';

@Entity()
export class CommentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  like: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board;
}
