import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomModeComponent } from './pages/custom-mode/custom-mode.component';
import { DefaultModeComponent } from './pages/default-mode/default-mode.component';
import { LobbyComponent } from './pages/lobby.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomModeComponent,
    LobbyComponent,
    DefaultModeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule
  ]
})
export class DashboardModule { }
