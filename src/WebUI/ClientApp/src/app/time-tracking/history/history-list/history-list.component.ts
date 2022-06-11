import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent extends BaseComponent implements OnInit {
  public constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
