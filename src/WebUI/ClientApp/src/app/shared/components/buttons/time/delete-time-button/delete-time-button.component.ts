import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-delete-time-button',
  templateUrl: './delete-time-button.component.html',
  styleUrls: ['./delete-time-button.component.scss'],
})
export class DeleteTimeButtonComponent extends BaseComponent implements OnInit {
  @Output()
  public delete: EventEmitter<void> = new EventEmitter();

  public onDelete(): void {
    this.delete.emit();
  }
}
