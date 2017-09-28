import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-obj',
  templateUrl: './class-obj.component.html',
  styleUrls: ['./class-obj.component.css']
})
export class ClassObjComponent implements OnInit {
  
  obj =
  {
    name : "mayuri",
    id : 221823
  }

  isTrue = true ;
  name = "Anup";

  constructor() { }

  ngOnInit() {
  }

}
