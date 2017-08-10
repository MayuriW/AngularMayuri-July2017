import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation : ViewEncapsulation.Emulated ,
})
export class HelloComponent implements OnInit {
  
  componentName : String ;
  ipType : String;
  isClick : boolean;
  constructor() { 
    this.componentName = " databinding";
    this.ipType="Button";
  this.isClick=false;}

  ngOnInit() {
  }

  myFun()
  {
    return " hello myFun";
  }

isClickCheck()
{
if(this.isClick)
return !this.isClick;
else
return this.isClick
}
}
