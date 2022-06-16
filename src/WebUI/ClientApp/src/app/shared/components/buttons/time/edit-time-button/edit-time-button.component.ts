import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-edit-time-button',
  templateUrl: './edit-time-button.component.html',
  styleUrls: ['./edit-time-button.component.scss'],
})
export class EditTimeButtonComponent extends BaseComponent implements OnInit {
  @Output()
  public edit: EventEmitter<void> = new EventEmitter();

  public onEdit(): void {
    this.edit.emit();
  }
}
