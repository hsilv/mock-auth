import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the User',
  })
  @IsNotEmpty({ message: 'Provea los nombres' })
  @IsString({ message: 'Los nombres deben de ser una cadena' })
  @MaxLength(100, { message: 'Los nombres son demasiado largos' })
  nombres: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the User',
  })
  @IsNotEmpty({ message: 'Provea los apellidos' })
  @IsString({ message: 'Los apellidos deben ser una cadena' })
  @MaxLength(100, { message: 'Los apellidos son demasiado largos' })
  apellidos: string;

  @ApiProperty({
    example: '2000-01-01',
    description: 'The birth date of the User',
  })
  @IsNotEmpty({ message: 'Provea una fecha de nacimiento' })
  @IsDateString(undefined, { message: 'Provea una fecha válida' })
  fecha_nacimiento: Date;

  @ApiProperty({
    example: '1234567890101',
    description: 'The DPI of the User',
  })
  @IsNotEmpty({ message: 'Provea un número de DPI' })
  @IsString({ message: 'El DPI debe ser una cadena' })
  @Length(13, 13, { message: 'El DPI tiene que tener 13 dígitos' })
  dpi: string;

  @ApiProperty({
    example: 'https://example.com/image.jpg',
    description: 'The photo of the User',
  })
  @IsString({ message: 'La foto debe ser una cadena' })
  @MaxLength(255, { message: 'La foto es demasiado larga' })
  foto: string;

  @ApiProperty({
    example: '123456789',
    description: 'The NIT of the User',
  })
  @IsString({ message: 'El NIT debe ser una cadena' })
  @MaxLength(20, { message: 'El NIT es demasiado largo' })
  nit: string;

  @ApiProperty({
    example: '12345678',
    description: 'The phone number of the User',
  })
  @IsString({ message: 'El teléfono debe ser una cadena' })
  @MaxLength(20, { message: 'El teléfono es demasiado largo' })
  telefono: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the User',
  })
  @IsNotEmpty({ message: 'Provea un correo' })
  @IsEmail(undefined, { message: 'Provea un correo válido' })
  correo: string;

  @ApiProperty({
    example: 'Password123!',
    description:
      'Password must contain Minimum 8 and Maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  })
  @IsNotEmpty({ message: 'Provea una contraseña' })
  @IsString({ message: 'La contraseña debe ser una cadena' })
  password: string;
}
