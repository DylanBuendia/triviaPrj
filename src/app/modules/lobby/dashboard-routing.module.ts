import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GameRoomComponent } from './pages/game-room/game-room.component';

import { LobbyComponent } from './pages/lobby.component';

const routes: Routes = [{
  path: '', component: LobbyComponent,
  children: [
    {path : 'gameroom', component : GameRoomComponent },
    {path : '', component : DashboardComponent }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
