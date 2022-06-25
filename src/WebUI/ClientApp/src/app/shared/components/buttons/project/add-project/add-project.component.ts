import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent extends BaseComponent implements OnInit {
  @Output()
  public add: EventEmitter<void> = new EventEmitter();

  public onAdd(): void {
    this.add.emit();
  }
}
