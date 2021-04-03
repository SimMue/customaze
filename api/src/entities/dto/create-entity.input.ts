import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateEntityInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
