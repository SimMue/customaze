import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateMetaEntityDto } from './create-meta-entity.dto';

@InputType()
export class UpdateMetaEntityDto extends PartialType(CreateMetaEntityDto) {
  @Field(() => ID)
  id: number;
}
