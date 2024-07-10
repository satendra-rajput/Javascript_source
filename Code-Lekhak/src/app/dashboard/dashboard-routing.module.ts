import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { authGuard } from '../core/guards/auth/auth.guard';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardLayoutComponent,canActivate:[authGuard], children: [
      {path:'', redirectTo:'/dashboard/default', pathMatch:'full'},
      {path:'default', component:DashboardDefaultComponent, title:"Dashboard"},
      {path:'my_profile', component:DashboardProfileComponent, title:"My Profile"},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
