import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEntityDto } from './dtos/create-entity.dto';
import { UpdateEntityDto } from './dtos/update-entity.dto';
import { EntitiesService } from './entities.service';
import { EntityModel } from './models/entity.model';

@Resolver(() => EntityModel)
export class EntitiesResolver {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Mutation(() => EntityModel)
  createEntity(@Args('dto') dto: CreateEntityDto) {
    return this.entitiesService.create(dto);
  }

  @Query(() => [EntityModel], { name: 'entities' })
  findAll() {
    return this.entitiesService.findAll();
  }

  @Query(() => EntityModel, { name: 'entity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entitiesService.findOne(id);
  }

  @Mutation(() => EntityModel)
  updateEntity(@Args('dto') dto: UpdateEntityDto) {
    return this.entitiesService.update(dto.id, dto);
  }

  @Mutation(() => EntityModel)
  removeEntity(@Args('id', { type: () => Int }) id: number) {
    return this.entitiesService.remove(id);
  }
}
