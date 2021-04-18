import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateMetaEntityDto } from './dtos/create-meta-entity.dto';
import { MetaEntityDto } from './dtos/meta-entity.dto';
import { UpdateMetaEntityDto } from './dtos/update-meta-entity.dto';
import { MetaEntityService } from './meta-entity.service';

@Resolver(() => MetaEntityDto)
export class MetaEntityResolver {
  constructor(private readonly metaEntityService: MetaEntityService) {}

  @Mutation(() => MetaEntityDto)
  async createMetaEntity(
    @Args('createMetaEntityDto') dto: CreateMetaEntityDto,
  ) {
    return await this.metaEntityService.create(dto);
  }

  @Query(() => [MetaEntityDto], { name: 'metaEntities' })
  findAll() {
    return this.metaEntityService.findAll();
  }

  @Query(() => MetaEntityDto, { name: 'metaEntity' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.metaEntityService.findOne(id);
  }

  @Mutation(() => MetaEntityDto)
  updateMetaEntity(@Args('updateMetaEntityDto') dto: UpdateMetaEntityDto) {
    return this.metaEntityService.update(dto.id, dto);
  }

  @Mutation(() => MetaEntityDto)
  removeMetaEntity(@Args('id', { type: () => Int }) id: number) {
    return this.metaEntityService.remove(id);
  }
}
