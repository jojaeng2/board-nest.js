import { Column, Entity, ManyToOne, PrimaryColumn, Timestamp } from 'typeorm';
import { User } from '../user/users.entity';

@Entity()
export class CommentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  like: number;

  @ManyToOne(() => User)
  user: User;
}
