import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FooterComponent } from './modules/home/components/footer/footer.component';
import { TermsComponent } from './modules/home/pages/terms/terms.component';
import { PrivacyComponent } from './modules/home/pages/privacy/privacy.component';
import { AboutusComponent } from './modules/home/pages/aboutus/aboutus.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { LeaderboardComponent } from './modules/ranking/pages/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent,
    AboutusComponent,
    HeaderComponent,
    LeaderboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
