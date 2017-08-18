import { RemoteService } from './../remote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rem-one',
  templateUrl: './rem-one.component.html',
  styleUrls: ['./rem-one.component.css'],
  providers:[RemoteService]
})
export class RemOneComponent implements OnInit {
  
  dt : string;
  constructor(private  remSer : RemoteService) { }

  ngOnInit() {

    this.dt = this.remSer.nm;
  }

  myClick()
  {
    this.dt = " "+new Date();
    this.remSer.nm = this.dt;

  }

}
