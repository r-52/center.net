import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-add-new-time-track',
  templateUrl: './add-new-time-track.component.html',
  styleUrls: ['./add-new-time-track.component.scss'],
})
export class AddNewTimeTrackComponent extends BaseComponent implements OnInit {
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
  //#endregion
}
