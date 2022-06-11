import { TestBed } from '@angular/core/testing';

import { DateToCalendarWeekResolverService } from './date-to-calendar-week-resolver.service';

describe('DateToCalendarWeekResolverService', () => {
  let service: DateToCalendarWeekResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateToCalendarWeekResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
