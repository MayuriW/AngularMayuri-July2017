import { Customer } from './customer';
import { RouterModule, Router,RouterLinkActive} from '@angular/router';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome-router',
  templateUrl: './welcome-router.component.html',
  styleUrls: ['./welcome-router.component.css']
})
export class WelcomeRouterComponent implements OnInit {
  
  //@Input ('nm') name : string ;
  //@Input ('pass') pass : string ;

  custObj : Customer = new Customer();
  
  constructor(
    private router : Router
 
    
  ) { 
    
  }

  ngOnInit() {
  }
  
 
 // Login(name,pass)
  Login(name : string,pass:string)
  {
    this.router.navigate(['second',name]);
  }

}
