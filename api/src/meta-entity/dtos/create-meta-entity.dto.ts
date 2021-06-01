import { Field, InputType } from '@nestjs/graphql';
import { MetaEntityEntity } from '../entities/meta-entity.entity';

@InputType()
export class CreateMetaEntityDto {
  @Field(() => String, { description: 'Display name' })
  displayName: string;

  static toEntity(dto: CreateMetaEntityDto) {
    return {
      displayName: dto?.displayName,
    } as MetaEntityEntity;
  }
}
