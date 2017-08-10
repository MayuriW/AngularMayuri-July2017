import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi.component';
import { CodekulComponent } from './codekul/codekul.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    CodekulComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
