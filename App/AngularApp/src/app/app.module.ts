import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi.component';
import { CodekulComponent } from './codekul/codekul.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TableComponentComponent } from './table-component/table-component.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    CodekulComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
