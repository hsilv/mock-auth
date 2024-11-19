import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export const FAQ_ENUM = [
  'Piloto',
  'Taxi',
  'Bus',
  'Flete',
  'Servicio a Domicilio',
];

export class CreateFaqDto {
  @ApiProperty({
    example: 'Cómo puedo tramitar mi tarjetón de circulación',
    description: 'The question of the FAQ',
  })
  @IsNotEmpty({ message: 'Provea la pregunta' })
  @IsString({ message: 'La pregunta debe ser una cadena' })
  pregunta: string;

  @ApiProperty({
    example: 'Taxi',
    description: 'The category of the FAQ',
  })
  @IsNotEmpty({ message: 'Provea la categoría' })
  @IsEnum(FAQ_ENUM, {
    message: 'La categoría no es válida',
  })
  categoria: string;

  @ApiProperty({
    example: 'Para tramitar el tarjetón de circulación, debes...',
    description: 'The answer of the FAQ',
  })
  @IsNotEmpty({ message: 'Provea la respuesta' })
  @IsString({ message: 'La respuesta debe ser una cadena' })
  respuesta: string;
}