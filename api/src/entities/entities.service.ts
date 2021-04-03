import { Injectable } from '@nestjs/common';
import { CreateEntityInput } from './dto/create-entity.input';
import { UpdateEntityInput } from './dto/update-entity.input';
import { Entity } from './entities/entity.entity';

@Injectable()
export class EntitiesService {
  create(createEntityInput: CreateEntityInput) {
    return 'This action adds a new entity';
  }

  findAll(): Entity[] {
    return [
      {
        exampleField: 1,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} entity`;
  }

  update(id: number, updateEntityInput: UpdateEntityInput) {
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
