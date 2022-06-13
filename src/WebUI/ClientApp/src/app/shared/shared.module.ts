import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { CalendarWeekDatepickerComponent } from './components/input/calendar-week-datepicker/calendar-week-datepicker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RefreshButtonComponent } from './components/buttons/refresh-button/refresh-button.component';
import { ModuleHeaderComponent } from './components/headlines/module-header/module-header.component';
import { ControlHeaderComponent } from './components/headlines/control-header/control-header.component';

@NgModule({
  declarations: [
    BaseComponent,
    ToolbarComponent,
    NavbarComponent,
    CalendarWeekDatepickerComponent,
    RefreshButtonComponent,
    ModuleHeaderComponent,
    ControlHeaderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [
    ToolbarComponent,
    RefreshButtonComponent,
    NavbarComponent,
    ModuleHeaderComponent,
    ControlHeaderComponent,
    CalendarWeekDatepickerComponent,
  ],
})
export class SharedModule {}
