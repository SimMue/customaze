import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMetaEntityDto } from './dtos/create-meta-entity.dto';
import { UpdateMetaEntityDto } from './dtos/update-meta-entity.dto';
import { MetaEntityEntity } from './entities/meta-entity.entity';
import { MetaEntityMapService } from './meta-entity-map.service';

@Injectable()
export class MetaEntityService {
  constructor(
    @InjectRepository(MetaEntityEntity)
    private repo: Repository<MetaEntityEntity>,
    private mapService: MetaEntityMapService,
  ) {}

  async create(dto: CreateMetaEntityDto) {
    const entity = this.mapService.fromCreateDto(dto);
    const result = await this.repo.save(entity);
    return this.mapService.toDto(result);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} metaEntity`;
  }

  update(id: number, dto: UpdateMetaEntityDto) {
    return `This action updates a #${id} metaEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} metaEntity`;
  }
}
