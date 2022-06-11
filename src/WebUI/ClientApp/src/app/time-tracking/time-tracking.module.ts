import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeTrackingRoutingModule } from './time-tracking-routing.module';
import { RouterModule } from '@angular/router';
import { AddNewTimeTrackComponent } from './add-new-time-track/add-new-time-track.component';

@NgModule({
  declarations: [
    AddNewTimeTrackComponent
  ],
  imports: [CommonModule, TimeTrackingRoutingModule, RouterModule],
})
export class TimeTrackingModule {}
