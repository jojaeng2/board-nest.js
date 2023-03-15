import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Entity()
export class Board {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => CommentEntity, (comment) => comment.board)
  comments: CommentEntity[];
}
