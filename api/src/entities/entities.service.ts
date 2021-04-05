import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dtos/create-entity.dto';
import { UpdateEntityDto } from './dtos/update-entity.dto';
import { EntityModel } from './models/entity.model';

@Injectable()
export class EntitiesService {
  private models: EntityModel[] = [];

  private toModel(dto: CreateEntityDto, id: number) {
    const model = new EntityModel();
    model.id = id;
    model.displayName = dto.displayName;
    return model;
  }

  create(dto: CreateEntityDto) {
    const model = this.toModel(dto, this.models.length + 1);
    this.models.push(model);
    return model;
  }

  findAll() {
    return this.models;
  }

  findOne(id: number) {
    return this.models.find((m) => m.id === id);
  }

  update(id: number, dto: UpdateEntityDto) {
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
