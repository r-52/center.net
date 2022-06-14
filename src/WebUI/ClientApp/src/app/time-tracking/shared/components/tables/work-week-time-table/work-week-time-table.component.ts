import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

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
  public constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
