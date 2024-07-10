import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardSidebarComponent,
    DashboardDefaultComponent,
    DashboardProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
