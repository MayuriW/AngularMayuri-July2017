import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { RemOneComponent } from './services/rem-one.component';
import { Service1Component } from './service1/service1.component';

@NgModule({
  declarations: [
    AppComponent,
    
    Service1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
