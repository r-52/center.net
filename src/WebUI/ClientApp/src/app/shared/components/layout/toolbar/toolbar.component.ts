import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent extends BaseComponent implements OnInit {
  @Output()
  public openNavbar: EventEmitter<void> = new EventEmitter();

  public constructor() {
    super();
  }

  public onOpenNavbar(): void {
    this.openNavbar.emit();
  }
}
