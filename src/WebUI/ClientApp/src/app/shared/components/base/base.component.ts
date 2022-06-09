import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit, OnDestroy {
  protected subscriptions: Subscription[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.onPreInit();
  }

  ngOnDestroy(): void {
    this.onPreUnsubscribe();
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
    this.onPostUnsubscribe();
  }

  protected onPreInit(): void {}

  protected onPreUnsubscribe(): void {}

  protected onPostUnsubscribe(): void {}
}
