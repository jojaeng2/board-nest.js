import { Column, Entity, PrimaryColumn } from 'typeorm';
import { UserCreateDto } from './dto/user_create.dto';
import { v1 as uuid } from 'uuid';

@Entity()
export class User {
  constructor(name: string, email: string, password: string, age: number) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
  }

  @PrimaryColumn()
  id: string;
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;
}
