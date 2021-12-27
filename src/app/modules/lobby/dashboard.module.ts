import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomModeComponent } from './pages/custom-mode/custom-mode.component';
import { DefaultModeComponent } from './pages/default-mode/default-mode.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomModeComponent,
    DefaultModeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
