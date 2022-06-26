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
import { AddTimeButtonComponent } from './components/buttons/time/add-time-button/add-time-button.component';
import { EditTimeButtonComponent } from './components/buttons/time/edit-time-button/edit-time-button.component';
import { DeleteTimeButtonComponent } from './components/buttons/time/delete-time-button/delete-time-button.component';
import { AddProjectComponent } from './components/buttons/project/add-project/add-project.component';
import { IconComponent } from './components/icon/icon/icon.component';

@NgModule({
  declarations: [
    BaseComponent,
    ToolbarComponent,
    NavbarComponent,
    CalendarWeekDatepickerComponent,
    RefreshButtonComponent,
    ModuleHeaderComponent,
    ControlHeaderComponent,
    AddTimeButtonComponent,
    EditTimeButtonComponent,
    DeleteTimeButtonComponent,
    AddProjectComponent,
    IconComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [
    ToolbarComponent,
    RefreshButtonComponent,
    NavbarComponent,
    ModuleHeaderComponent,
    ControlHeaderComponent,
    CalendarWeekDatepickerComponent,
    AddTimeButtonComponent,
    EditTimeButtonComponent,
    DeleteTimeButtonComponent,
    AddProjectComponent,
    IconComponent,
  ],
})
export class SharedModule {}
