import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutModule } from './app-rout/app-rout.module';
import { PracticeComponent } from './practice/practice.component';
import { LinkComponent } from './link/link.component';
import { Prac1Component } from './practice/prac1/prac1.component';
import { Prac2Component } from './practice/prac2/prac2.component';
import { Prac3Component } from './practice/prac3/prac3.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { Prac4Component } from './practice/prac4/prac4.component';
import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PracticeComponent,
    LinkComponent,
    Prac1Component,
    Prac2Component,
    Prac3Component,
    NotFoundComponent,
    AboutComponent,
    Prac4Component
  ],
  imports: [
    BrowserModule,
    AppRoutModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule

  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
