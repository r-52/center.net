import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-add-time-button',
  templateUrl: './add-time-button.component.html',
  styleUrls: ['./add-time-button.component.scss'],
})
export class AddTimeButtonComponent extends BaseComponent implements OnInit {
  @Output()
  public add: EventEmitter<void> = new EventEmitter();

  public onAdd(): void {
    this.add.emit();
  }
}
