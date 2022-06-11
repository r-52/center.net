import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss'],
})
export class HistoryDetailComponent extends BaseComponent implements OnInit {
  public constructor() {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
  }
}
