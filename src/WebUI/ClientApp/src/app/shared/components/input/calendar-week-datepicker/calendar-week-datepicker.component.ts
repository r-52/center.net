import {
  Component,
  EventEmitter,
  forwardRef,
  Inject,
  Injectable,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
} from '@angular/material/core';
import {
  DateRange,
  MatDatepicker,
  MatDatepickerInputEvent,
  MatDateRangeInput,
  MatDateRangePicker,
  MatDateRangeSelectionStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { IDatePickerSelection } from 'src/app/shared/models/datepicker-selection.model';
import { DateToCalendarWeekResolverService } from 'src/app/shared/services/date-to-calendar-week-resolver.service';
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
      const start = this._dateAdapter.addCalendarDays(date, 1 - x.getDay());
      const end = this._dateAdapter.addCalendarDays(date, 7 - x.getDay());
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
  @Output()
  public startDateSelected: EventEmitter<Date> = new EventEmitter();

  @Output()
  public endDateSelected: EventEmitter<Date> = new EventEmitter();

  @Output()
  public finshedDateSelection: EventEmitter<IDatePickerSelection> = new EventEmitter();

  @Input()
  public startDateToDisplay!: Date;

  @Input()
  public endDateToDisplay!: Date;

  protected _dateFormat!: string;

  private _startDate!: Date;

  private _endDate!: Date;

  public constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _adapter: DateAdapter<any>,
    private readonly _calendarWeekResolverService: DateToCalendarWeekResolverService,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {
    super();
    this._adapter.setLocale(this._locale);
  }

  //#region lifecycle
  public ngOnInit(): void {
    super.ngOnInit();
    this._prepareDefaultDate();
    this._setDateLocale();
  }
  //#endregion

  //#region event handling
  public changeDate(
    form: 'start' | 'end',
    event: MatDatepickerInputEvent<Date>
  ): void {
    const selected = event?.value!;
    switch (form) {
      case 'start':
        this.startDateSelected.emit(selected);
        this._startDate = selected;
        break;
      case 'end':
        this.endDateSelected.emit(selected);
        this._endDate = selected;
        break;
      default:
        break;
    }

    if (this._startDate && this._endDate) {
      const finished = {
        endDate: this._endDate,
        startDate: this._startDate,
      } as IDatePickerSelection;
      this.finshedDateSelection.emit(finished);
    }
  }
  //#endregion

  //#region private methods
  private _setDateLocale(): void {
    switch (this._locale) {
      case 'de-DE':
        this._dateFormat = $localize`TT.MM.JJJJ`;
        break;
      default:
        this._dateFormat = $localize`MM/DD/YYYY`;
        break;
    }
  }

  private _prepareDefaultDate(): void {
    if (!this.startDateToDisplay || this.endDateToDisplay) {
      const result = this._calendarWeekResolverService.resolveDate();
      this.startDateToDisplay = result[0];
      this.endDateToDisplay = result[6];
    }
  }
  //#endregion
}
