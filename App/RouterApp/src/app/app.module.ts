import { MyRtModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeRouterComponent } from './welcome-router/welcome-router.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { CustComponent } from './second/cust.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { FormsComponent } from './forms/forms.component';
import { NgForm } from "@angular/forms";
import { TempDrivenComponent } from './forms/temp-driven/temp-driven.component';

import { PipesComponent } from './pipe/pipes/pipes.component';
import { MobileFilterPipe } from './pipe/mobile-filter.pipe';
import { MessappComponent } from './messapp/messapp.component';
import { MessNavbarComponent } from './mess-navbar/mess-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeRouterComponent,
    SecondComponent,
    CustComponent,
    ForgetPassComponent,
    FormsComponent,
    TempDrivenComponent,
    PipesComponent,
    MobileFilterPipe,
    MessappComponent,
    MessNavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MyRtModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
