import { IsString } from 'class-validator';

export class UserFindByEmailDto {
  @IsString()
  email: string;
}
