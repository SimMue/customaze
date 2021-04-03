import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateEntityInput } from './dto/create-entity.input';
import { UpdateEntityInput } from './dto/update-entity.input';
import { EntitiesService } from './entities.service';
import { Entity } from './entities/entity.entity';

@Resolver(() => Entity)
export class EntitiesResolver {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Mutation(() => Entity)
  createEntity(
    @Args('createEntityInput') createEntityInput: CreateEntityInput,
  ) {
    return this.entitiesService.create(createEntityInput);
  }

  @Query(() => [Entity], { name: 'entities' })
  findAll() {
    return this.entitiesService.findAll();
  }

  @Query(() => Entity, { name: 'entity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entitiesService.findOne(id);
  }

  @Mutation(() => Entity)
  updateEntity(
    @Args('updateEntityInput') updateEntityInput: UpdateEntityInput,
  ) {
    return this.entitiesService.update(updateEntityInput.id, updateEntityInput);
  }

  @Mutation(() => Entity)
  removeEntity(@Args('id', { type: () => Int }) id: number) {
    return this.entitiesService.remove(id);
  }
}
