import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent implements OnInit {
  
  myFrm : NgForm;
  dtFrm = 
  {
    usNm : '',
    eml : '',
    pass : ''
  }
  constructor() { }

  ngOnInit() {
  }

  onFrmSub(myFrm)
{
  console.log(myFrm);
}
}
