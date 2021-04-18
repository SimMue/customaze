import { Injectable } from '@nestjs/common';
import { CreateMetaEntityDto } from './dtos/create-meta-entity.dto';
import { MetaEntityDto } from './dtos/meta-entity.dto';
import { MetaEntityEntity } from './entities/meta-entity.entity';

@Injectable()
export class MetaEntityMapService {
  toDto(entity: MetaEntityEntity) {
    const dto = new MetaEntityDto();
    dto.id = entity.id;
    dto.displayName = entity.displayName;
    return dto;
  }

  fromCreateDto(dto: CreateMetaEntityDto) {
    const entity = new MetaEntityEntity();
    entity.displayName = dto.displayName;
    return entity;
  }
}
