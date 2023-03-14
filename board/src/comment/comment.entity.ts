import { Column, Entity, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export class CommentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  time: Timestamp;

  @Column()
  like: number;
}
