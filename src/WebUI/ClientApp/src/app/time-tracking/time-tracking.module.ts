import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { RouterModule } from '@angular/router';
import { AddNewTimeTrackComponent } from './add-new-time-track/add-new-time-track.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    AddNewTimeTrackComponent,
    HistoryListComponent,
    HistoryDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TimeTrackingRoutingModule,
    RouterModule,
  ],
})
export class TimeTrackingModule {}
