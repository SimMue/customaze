import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateEntityDto } from './create-entity.dto';

@InputType()
export class UpdateEntityDto extends PartialType(CreateEntityDto) {
  @Field(() => ID)
  id: number;
}
