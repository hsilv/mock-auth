import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the User',
  })
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide a valid email' })
  email: string;

  @ApiProperty({
    example: 'Password123!',
    description:
      'Password must contain Minimum 8 and Maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  })
  @IsNotEmpty()
  @IsString({ message: 'Password must be a string' })
  password: string;
}
