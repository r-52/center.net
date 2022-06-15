import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { DateToCalendarWeekResolverService } from 'src/app/shared/services/date-to-calendar-week-resolver.service';
import { IWorkWeekDayEntry } from '../../../models/work-week-day-entry.model';

@Component({
  selector: 'app-work-week-time-table',
  templateUrl: './work-week-time-table.component.html',
  styleUrls: ['./work-week-time-table.component.scss'],
})
export class WorkWeekTimeTableComponent
  extends BaseComponent
  implements OnInit
{
  @Input()
  public startDate!: Date;

  @Input()
  public endDate!: Date;

  protected displayedColumns: string[] = ['date'];

  protected dataSource: IWorkWeekDayEntry[] = [];

  public constructor(
    private readonly _dateWeekBuilderService: DateToCalendarWeekResolverService
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this._prepareTable();
  }

  //#region methods
  private _prepareTable() {
    const resolvedDates = this._dateWeekBuilderService.resolveDate(
      this.endDate
    );
    resolvedDates.forEach((x) => this.dataSource.push({ date: x }));
  }
  //#endregion
}
