import { Test, TestingModule } from '@nestjs/testing';
import { MetaEntityService } from './meta-entity.service';

describe('MetaEntityService', () => {
  let service: MetaEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaEntityService],
    }).compile();

    service = module.get<MetaEntityService>(MetaEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
