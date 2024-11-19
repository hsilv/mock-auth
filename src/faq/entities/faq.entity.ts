import { Column, Entity, PrimaryColumn } from 'typeorm';

import { FAQ_ENUM } from '../dto/create-faq.dto';

@Entity()
export class Faq {
  @PrimaryColumn({ type: 'int', generated: true })
  id: number;

  @Column({ type: 'varchar', length: 100, enum: FAQ_ENUM })
  categoria: string;

  @Column({ type: 'text' })
  pregunta: string;

  @Column({ type: 'text' })
  respuesta: string;

  @Column({ type: 'boolean', default: false })
  inLanding: boolean;
}
