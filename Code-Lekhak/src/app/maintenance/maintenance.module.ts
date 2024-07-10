import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { UnderConstructComponent } from './under-construct/under-construct.component';



@NgModule({
  declarations: [
    Error404Component,
    Error500Component,
    ComingSoonComponent,
    UnderConstructComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MaintenanceModule { }
