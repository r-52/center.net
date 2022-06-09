import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then((x) => x.CmsModule),
  },
  {
    path: 'hr',
    loadChildren: () => import('./hr/hr.module').then((x) => x.HrModule),
  },
  {
    path: 'tenant-admin',
    loadChildren: () =>
      import('./tenant-admin/tenant-admin.module').then(
        (x) => x.TenantAdminModule
      ),
  },
  {
    path: 'time-tracking',
    loadChildren: () =>
      import('./time-tracking/time-tracking.module').then(
        (x) => x.TimeTrackingModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((x) => x.ProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
