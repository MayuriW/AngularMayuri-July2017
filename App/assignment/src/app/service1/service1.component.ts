import { Component, OnInit } from '@angular/core';
import { BckserviceService } from "./bckservice.service";

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
  providers: [BckserviceService]
})
export class Service1Component implements OnInit {
  
  dt : string;

  ngOnInit() {
  }

 changedate()
 {
   
 }
  

}
