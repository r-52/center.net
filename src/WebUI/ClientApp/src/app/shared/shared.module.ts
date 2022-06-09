import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [BaseComponent, ToolbarComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ToolbarComponent, NavbarComponent],
})
export class SharedModule {}
