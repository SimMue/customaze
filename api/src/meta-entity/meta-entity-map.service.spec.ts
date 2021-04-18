import { Test, TestingModule } from '@nestjs/testing';
import { MetaEntityMapService } from './meta-entity-map.service';

describe('MetaEntityMapService', () => {
  let service: MetaEntityMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaEntityMapService],
    }).compile();

    service = module.get<MetaEntityMapService>(MetaEntityMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
