import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { AddNewTimeEntryModalComponent } from '../../modals/add-new-time-entry-modal/add-new-time-entry-modal.component';

@Component({
  selector: 'app-open-add-time-modal',
  templateUrl: './open-add-time-modal.component.html',
  styleUrls: ['./open-add-time-modal.component.scss'],
})
export class OpenAddTimeModalComponent extends BaseComponent implements OnInit {
  @Input()
  public date!: Date;

  @Output()
  public modalClosed: EventEmitter<void> = new EventEmitter();

  public constructor(private readonly _dialog: MatDialog) {
    super();
  }

  //#region event handler
  public add(): void {
    const dialogRef = this._dialog.open(AddNewTimeEntryModalComponent);
    dialogRef.afterClosed().subscribe((result: unknown) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //#endregion
}
