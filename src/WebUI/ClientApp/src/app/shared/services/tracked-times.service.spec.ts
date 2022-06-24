import { TestBed } from '@angular/core/testing';

import { TrackedTimesService } from './tracked-times.service';

describe('TrackedTimesService', () => {
  let service: TrackedTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
