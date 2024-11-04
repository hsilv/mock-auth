import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the User',
  })
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide a valid email' })
  correo: string;

  @ApiProperty({
    example: 'Password123!',
    description: 'The password of the User',
  })
  @IsNotEmpty()
  @IsString({ message: 'Password must be a string' })
  clave: string;
}
