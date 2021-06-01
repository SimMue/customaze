import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { MetaEntityEntity } from '../entities/meta-entity.entity';
import { CreateMetaEntityDto } from './create-meta-entity.dto';

@InputType()
export class UpdateMetaEntityDto extends PartialType(CreateMetaEntityDto) {
  @Field(() => ID)
  guid: string;

  @Field(() => String, { description: 'Display name' })
  displayName: string;

  static toEntity(dto: UpdateMetaEntityDto) {
    return {
      guid: dto?.guid,
      displayName: dto?.displayName,
    } as MetaEntityEntity;
  }
}
