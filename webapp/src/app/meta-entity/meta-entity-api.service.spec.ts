import { TestBed } from '@angular/core/testing';

import { MetaEntityApiService } from './meta-entity-api.service';

describe('MetaEntityApiService', () => {
  let service: MetaEntityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaEntityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
