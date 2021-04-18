import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMetaEntityDto {
  @Field(() => String, { description: 'Display name' })
  displayName: string;
}
