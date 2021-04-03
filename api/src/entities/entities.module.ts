import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesResolver } from './entities.resolver';

@Module({
  providers: [EntitiesResolver, EntitiesService]
})
export class EntitiesModule {}
