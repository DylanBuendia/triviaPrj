import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LobbyComponent } from './pages/lobby.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GameRoomComponent } from './pages/game-room/game-room.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LobbyComponent,
    GameRoomComponent

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
