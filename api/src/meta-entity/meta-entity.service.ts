import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetaEntityDto } from './dtos/create-meta-entity.dto';
import { UpdateMetaEntityDto } from './dtos/update-meta-entity.dto';
import { MetaEntityEntity } from './entities/meta-entity.entity';

@Injectable()
export class MetaEntityService {
  constructor(
    @InjectRepository(MetaEntityEntity)
    private repo: Repository<MetaEntityEntity>,
  ) {}

  async create(dto: CreateMetaEntityDto) {
    const entity = await this.repo.save(CreateMetaEntityDto.toEntity(dto));
    return MetaEntityEntity.toDto(entity);
  }

  async findAll() {
    const entities = await this.repo.find();
    return MetaEntityEntity.toDtos(entities);
  }

  async findOne(guid: string) {
    const entity = await this.repo.findOne(guid);
    return MetaEntityEntity.toDto(entity);
  }

  async update(dto: UpdateMetaEntityDto) {
    const entity = await this.repo.save(UpdateMetaEntityDto.toEntity(dto));
    return MetaEntityEntity.toDto(entity);
  }

  remove(id: string) {
    return `This action removes a #${id} metaEntity`;
  }
}
