import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewTimeTrackComponent } from './add-new-time-track/add-new-time-track.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';
import { HistoryListComponent } from './history/history-list/history-list.component';

const routes: Routes = [
  {
    path: 'new',
    component: AddNewTimeTrackComponent,
  },
  {
    path: 'history/-',
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: HistoryListComponent,
      },
      {
        path: 'details/:uid',
        pathMatch: 'full',
        component: HistoryDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeTrackingRoutingModule {}
