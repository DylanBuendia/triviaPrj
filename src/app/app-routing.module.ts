import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './modules/home/pages/aboutus/aboutus.component';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { PrivacyComponent } from './modules/home/pages/privacy/privacy.component';
import { TermsComponent } from './modules/home/pages/terms/terms.component';
import { LeaderboardComponent } from './modules/ranking/pages/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'lobby', loadChildren: () => import('./modules/lobby/dashboard.module').then(m => m.DashboardModule) },
  { path: 'terms', component:TermsComponent},
  { path: 'privacy', component:PrivacyComponent},
  { path: 'aboutus', component:AboutusComponent},
  { path: 'leaderboard', component:LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
