import { Test, TestingModule } from '@nestjs/testing';
import { MetaEntityResolver } from './meta-entity.resolver';
import { MetaEntityService } from './meta-entity.service';

describe('MetaEntityResolver', () => {
  let resolver: MetaEntityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaEntityResolver, MetaEntityService],
    }).compile();

    resolver = module.get<MetaEntityResolver>(MetaEntityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
