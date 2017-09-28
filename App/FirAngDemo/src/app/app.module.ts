import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CourseService } from "./course.service";
import {CourseComponent} from "./course.component";
import { ClassObjComponent } from './class-obj/class-obj.component';
import { AddItemComponent } from './add-item/add-item.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CourseComponent,
    ClassObjComponent,
    AddItemComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireModule.initializeApp(environment.fireBaseLogin),
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
