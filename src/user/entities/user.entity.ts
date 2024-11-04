import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * This decorator will help to autogenerate id for the table.
   */

  @PrimaryColumn({ type: 'int', generated: true })
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombres: string;

  @Column({ type: 'varchar', length: 100 })
  apellidos: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 20, unique: true })
  dpi: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  foto: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  nit: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  correo: string;

  @Column({ type: 'varchar' })
  clave: string;

  @Column({ type: 'boolean', default: true })
  verificado: boolean;
}
