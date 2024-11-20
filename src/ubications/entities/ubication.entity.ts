import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('TB_MDT_UBICACIONES')
export class Ubication {
  @PrimaryColumn({ type: 'int', generated: true })
  id: number;

  @Column({ type: 'real', nullable: false })
  lat: number;

  @Column({ type: 'real', nullable: false })
  lon: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  horario: string;
}
