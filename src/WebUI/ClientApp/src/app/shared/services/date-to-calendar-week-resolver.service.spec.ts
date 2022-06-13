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

  it('should resolve the default date (now) to a list', () => {
    const defaultList = service.resolveDate();
    expect(defaultList.length).toEqual(7);
  });

  it('should resolve a custom date to a list', () => {});
});
