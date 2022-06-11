import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CalendarWeekDatepickerComponent } from './components/input/calendar-week-datepicker/calendar-week-datepicker.component';

@NgModule({
  declarations: [
    BaseComponent,
    ToolbarComponent,
    NavbarComponent,
    CalendarWeekDatepickerComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ToolbarComponent, NavbarComponent, CalendarWeekDatepickerComponent],
})
export class SharedModule {}
