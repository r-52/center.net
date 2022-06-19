import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { RouterModule } from '@angular/router';
import { AddNewTimeTrackComponent } from './add-new-time-track/add-new-time-track.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { WorkWeekTimeTableComponent } from './shared/components/tables/work-week-time-table/work-week-time-table.component';
import { WorkWeekTableCardComponent } from './shared/components/cards/work-week-table-card/work-week-table-card.component';
import { AddNewTimeEntryModalComponent } from './shared/components/modals/add-new-time-entry-modal/add-new-time-entry-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddNewTimeTrackComponent,
    HistoryListComponent,
    HistoryDetailComponent,
    WorkWeekTimeTableComponent,
    WorkWeekTableCardComponent,
    AddNewTimeEntryModalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TimeTrackingRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class TimeTrackingModule {}
