import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaEntityEntity } from './entities/meta-entity.entity';
import { MetaEntityMapService } from './meta-entity-map.service';
import { MetaEntityResolver } from './meta-entity.resolver';
import { MetaEntityService } from './meta-entity.service';

@Module({
  imports: [TypeOrmModule.forFeature([MetaEntityEntity])],
  providers: [MetaEntityResolver, MetaEntityService, MetaEntityMapService],
})
export class MetaEntityModule {}
