import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MetaEntityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayName: string;
}
