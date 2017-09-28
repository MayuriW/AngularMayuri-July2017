import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app';
 courses : any[];
 constructor(db:AngularFireDatabase)
 {
  db.list("/Courses").subscribe(courses => {
    this.courses = courses ;
    console.log(this.courses);
  });
 }
}
