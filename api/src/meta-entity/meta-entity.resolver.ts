import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
  findOne(@Args('guid', { type: () => String }) guid: string) {
    return this.metaEntityService.findOne(guid);
  }

  @Mutation(() => MetaEntityDto)
  updateMetaEntity(@Args('updateMetaEntityDto') dto: UpdateMetaEntityDto) {
    return this.metaEntityService.update(dto);
  }

  @Mutation(() => MetaEntityDto)
  removeMetaEntity(@Args('guid', { type: () => String }) guid: string) {
    return this.metaEntityService.remove(guid);
  }
}
