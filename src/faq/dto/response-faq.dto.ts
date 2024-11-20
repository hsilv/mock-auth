import { ApiProperty } from '@nestjs/swagger';

export class FaqResponseDto {
  @ApiProperty({ example: 1, description: 'The ID of the FAQ' })
  id: number;

  @ApiProperty({
    example: 'Cómo puedo tramitar mi tarjetón de circulación',
    description: 'The question of the FAQ',
  })
  pregunta: string;

  @ApiProperty({ example: 'Taxi', description: 'The category of the FAQ' })
  categoria: string;

  @ApiProperty({
    example: 'Para tramitar el tarjetón de circulación, debes...',
    description: 'The answer of the FAQ',
  })
  respuesta: string;

  @ApiProperty({
    example: false,
    description: 'Indicates if the FAQ is displayed on the landing page',
  })
  inLanding: boolean;
}

export class DeletedFaqResponseDto {
  @ApiProperty({ example: true, description: 'The status of the deletion' })
  ok: boolean;
}
