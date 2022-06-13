import { Injectable } from '@angular/core';
import * as luxon from 'luxon';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root',
})
export class DateToCalendarWeekResolverService {
  public constructor() {}

  public resolveDate(reference: Date = new Date()): Date[] {
    const converted = DateTime.fromJSDate(reference);
    let startOfWeek = converted.startOf('week');
    const result: Date[] = [];
    result.push(startOfWeek.toJSDate());

    let o = startOfWeek;
    for (let x = 1; x < 7; x++) {
      o = o.plus({ days: 1 });
      result.push(o.toJSDate());
    }

    return result;
  }
}
