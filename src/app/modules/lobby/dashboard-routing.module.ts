import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomModeComponent } from './pages/custom-mode/custom-mode.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultModeComponent } from './pages/default-mode/default-mode.component';
import { LobbyComponent } from './pages/lobby.component';

const routes: Routes = [{
  path: '', component: LobbyComponent,
  children: [
    {path : 'custom-game', component : CustomModeComponent},
    {path : 'play', component : DefaultModeComponent },
    {path : '', component : DashboardComponent }
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
