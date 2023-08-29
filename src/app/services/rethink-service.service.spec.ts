import { TestBed } from '@angular/core/testing';

import { RethinkServiceService } from './rethink-service.service';

describe('RethinkServiceService', () => {
  let service: RethinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RethinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
