import { Column, Entity, PrimaryColumn } from 'typeorm';

import { FAQ_ENUM } from '../dto/create-faq.dto';

@Entity('TB_MDT_FAQ')
export class Faq {
  @PrimaryColumn({ type: 'int', generated: true })
  id: number;

  @Column({ type: 'varchar', length: 100, enum: FAQ_ENUM })
  categoria: string;

  @Column({ type: 'clob' })
  pregunta: string;

  @Column({ type: 'clob' })
  respuesta: string;

  @Column({ type: 'number', default: 0 })
  inLanding: number;
}
