import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewTimeTrackComponent } from './add-new-time-track/add-new-time-track.component';
import { HistoryDetailComponent } from './history/history-detail/history-detail.component';
import { HistoryListComponent } from './history/history-list/history-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';

const routes: Routes = [
  {
    path: 'time/-',
    children: [
      {
        pathMatch: 'full',
        component: AddNewTimeTrackComponent,
        path: 'new',
      },
    ],
  },
  {
    path: 'project/-',
    children: [
      {
        path: 'list',
        pathMatch: 'full',
        component: ProjectListComponent,
      },
      {
        path: 'details/:uid',
        pathMatch: 'full',
        component: ProjectDetailComponent,
      },
    ],
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
