import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EntityModel {
  @Field(() => ID)
  id: number;

  @Field(() => String, { description: 'Display name' })
  displayName: string;
}
