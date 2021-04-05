import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEntityDto {
  @Field(() => String, { description: 'Display name' })
  displayName: string;
}
