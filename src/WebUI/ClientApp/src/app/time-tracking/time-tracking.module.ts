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
import { OpenAddTimeModalComponent } from './shared/components/controls/open-add-time-modal/open-add-time-modal.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AddNewTimeTrackComponent,
    HistoryListComponent,
    HistoryDetailComponent,
    WorkWeekTimeTableComponent,
    WorkWeekTableCardComponent,
    AddNewTimeEntryModalComponent,
    OpenAddTimeModalComponent,
    ProjectListComponent,
    ProjectDetailComponent,
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
