import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss'],
})
export class RefreshButtonComponent extends BaseComponent implements OnInit {
  @Output()
  public refresh: EventEmitter<void> = new EventEmitter();
  /**
   * creates a new instance
   */
  public constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }

  //#region event handler
  public onRefresh(): void {
    this.refresh.emit();
  }
  //#endregion
}
