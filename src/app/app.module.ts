import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FooterComponent } from './modules/home/components/footer/footer.component';
import { TermsComponent } from './modules/home/pages/terms/terms.component';
import { PrivacyComponent } from './modules/home/pages/privacy/privacy.component';
import { AboutusComponent } from './modules/home/pages/aboutus/aboutus.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TermsComponent,
    PrivacyComponent,
    AboutusComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
