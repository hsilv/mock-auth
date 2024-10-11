import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  /**
   * This decorator will help to autogenerate id for the table.
   */

  @PrimaryColumn({ type: 'varchar', length: 30 })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;
}
