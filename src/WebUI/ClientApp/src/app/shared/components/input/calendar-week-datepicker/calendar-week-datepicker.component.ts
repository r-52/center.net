import { Component, Inject, Injectable, OnInit } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
import {
  DateRange,
  MatDateRangeSelectionStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { BaseComponent } from '../../base/base.component';

@Injectable()
export class FullWeekSelectionStrategy<D>
  implements MatDateRangeSelectionStrategy<D>
{
  public constructor(private _dateAdapter: DateAdapter<D>) {}

  public selectionFinished(date: D | null): DateRange<D> {
    return this._createWholeWeekRange(date);
  }

  public createPreview(activeDate: D | null): DateRange<D> {
    return this._createWholeWeekRange(activeDate);
  }

  private _createWholeWeekRange(date: D | null): DateRange<D> {
    if (date) {
      const x: Date = date as unknown as Date;
      const start = this._dateAdapter.addCalendarDays(date, 0 - x.getDay());
      const end = this._dateAdapter.addCalendarDays(date, 6 - x.getDay());
      // @ts-ignore
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-calendar-week-datepicker',
  templateUrl: './calendar-week-datepicker.component.html',
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FullWeekSelectionStrategy,
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_NATIVE_DATE_FORMATS,
    },
  ],
  styleUrls: ['./calendar-week-datepicker.component.scss'],
})
export class CalendarWeekDatepickerComponent
  extends BaseComponent
  implements OnInit
{
  protected _dateFormat!: string;

  public constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    super();
    this._adapter.setLocale(this._locale);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    switch (this._locale) {
      case 'de-DE':
        this._dateFormat = $localize`TT.MM.JJJJ`;
        break;
      default:
        this._dateFormat = $localize`MM/DD/YYYY`;
        break;
    }
  }
}
