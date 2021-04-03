import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Entity {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
