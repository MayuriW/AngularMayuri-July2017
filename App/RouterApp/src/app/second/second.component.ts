import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustComponent } from "./cust.component";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

custObj : CustComponent = new  CustComponent();

usNm : string;

  constructor( private actRt : ActivatedRoute ) { }

  ngOnInit() {

    //this.usNm = this.actRt.snapshot.params['name'];
    this.usNm = this.actRt.snapshot.params['name'];
  }

}
