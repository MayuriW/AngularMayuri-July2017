import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYAg8C_lB7vPZp-Mo9dY61ZGFiFBvDxto'
    })
  ],
  providers: [],
  //declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
