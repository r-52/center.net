import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-work-week-table-card',
  templateUrl: './work-week-table-card.component.html',
  styleUrls: ['./work-week-table-card.component.scss'],
})
export class WorkWeekTableCardComponent
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
