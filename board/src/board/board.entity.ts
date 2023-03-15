import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';
import { v1 as uuid } from 'uuid';

@Entity()
export class Board {
  constructor(title: string, content: string) {
    this.id = uuid();
    this.title = title;
    this.content = content;
  }

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => CommentEntity, (comment) => comment.board)
  comments: CommentEntity[];
}
