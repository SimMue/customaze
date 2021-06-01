import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MetaEntityDto {
  @Field(() => ID)
  guid: string;

  @Field(() => String, { description: 'Display name' })
  displayName: string;
}
