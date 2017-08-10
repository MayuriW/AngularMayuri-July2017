import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { InputComponent } from './component1/input.component';
import { OutputComponent } from './component1/output.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { InComponentComponent } from './main-component/in-component.component';
import { OutComponentComponent } from './main-component/out-component.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { TableComponentComponent } from './table-component/table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    InputComponent,
    OutputComponent,
    MainComponentComponent,
    InComponentComponent,
    OutComponentComponent,
    ContentProjectionComponent,
    LocalRefsComponent,
    AttributeDirComponent,
    TableComponentComponent
  ],
  imports: [
    BrowserModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
