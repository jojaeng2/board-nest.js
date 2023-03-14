import { IsNumber, IsString, Max, Min } from 'class-validator';

export class UserCreateDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsNumber()
  @Min(1)
  @Max(100)
  age: number;
}
