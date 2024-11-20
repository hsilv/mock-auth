import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

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

  @ApiProperty({
    example: false,
    description: 'If the FAQ is in the landing page',
    required: false,
  })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'El valor debe ser un número' },
  )
  @IsIn([0, 1], { message: 'El valor debe ser 0 o 1' })
  inLanding: number;
}
