import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUbicationDto {
  @ApiProperty({
    example: -14.62706,
    description: 'The latitude of the ubication',
  })
  @IsNotEmpty({ message: 'The latitude is required' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 8 },
    { message: 'The latitude must be a number' },
  )
  lat: number;

  @ApiProperty({
    example: -90.51506,
    description: 'The longitude of the ubication',
  })
  @IsNotEmpty({ message: 'The longitude is required' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 8 },
    { message: 'The longitude must be a number' },
  )
  lon: number;

  @ApiProperty({
    example: '7 Avenida 12-39, Zona 9, Edificio Etisa',
    description: 'The address of the ubication',
  })
  @IsNotEmpty({ message: 'The address is required' })
  @IsString({ message: 'The address must be a string' })
  direccion: string;

  @ApiProperty({
    description: 'The name of the ubication',
    example: 'Plaza España',
  })
  @IsNotEmpty({ message: 'The name is required' })
  @IsString({ message: 'The name must be a string' })
  nombre: string;

  @ApiProperty({
    description: 'The schedule of the ubication',
    example:
      'Lunes a Viernes \n 7:00 AM - 16:00 PM \n \n Sábado \n 8:00 AM - 12:00 PM',
  })
  @IsNotEmpty({ message: 'The schedule is required' })
  @IsString({ message: 'The schedule must be a string' })
  horario: string;
}
