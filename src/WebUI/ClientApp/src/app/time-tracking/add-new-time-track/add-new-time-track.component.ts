import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { IDatePickerSelection } from 'src/app/shared/models/datepicker-selection.model';

@Component({
  selector: 'app-add-new-time-track',
  templateUrl: './add-new-time-track.component.html',
  styleUrls: ['./add-new-time-track.component.scss'],
})
export class AddNewTimeTrackComponent extends BaseComponent implements OnInit {
  protected startDate!: Date;

  protected endDate!: Date;

  public constructor() {
    super();
  }

  //#region lifecycle
  public ngOnInit(): void {
    super.ngOnInit();
  }
  //#endregion

  //#region event handler
  public loadData(): void {}

  public finshedDateSelection(selection: IDatePickerSelection): void {
    this.startDate = selection.startDate;
    this.endDate = selection.endDate;
    debugger;
  }
  //#endregion
}
