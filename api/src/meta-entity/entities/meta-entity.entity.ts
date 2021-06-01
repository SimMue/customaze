import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MetaEntityDto } from '../dtos/meta-entity.dto';

@Entity()
export class MetaEntityEntity {
  @PrimaryGeneratedColumn('uuid')
  guid: string;

  @Column()
  displayName: string;

  static toDto(entity: MetaEntityEntity) {
    return {
      guid: entity?.guid,
      displayName: entity?.displayName,
    } as MetaEntityDto;
  }

  static toDtos(entities: MetaEntityEntity[]) {
    return entities.map((e) => MetaEntityEntity.toDto(e));
  }
}
