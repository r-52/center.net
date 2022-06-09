import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'cms',
    loadChildren: () =>
      import('./cms/cms-routing.module').then((x) => x.CmsRoutingModule),
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('./hr/hr-routing.module').then((x) => x.HrRoutingModule),
  },
  {
    path: 'tenant-admin',
    loadChildren: () =>
      import('./tenant-admin/tenant-admin-routing.module').then(
        (x) => x.TenantAdminRoutingModule
      ),
  },
  {
    path: 'time-tracking',
    loadChildren: () =>
      import('./time-tracking/time-tracking-routing.module').then(
        (x) => x.TimeTrackingRoutingModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile-routing.module').then(
        (x) => x.ProfileRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
