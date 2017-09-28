import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  
  bike : string = 'hundai'
  private mobiles = [
    'Aandroid',
    'Apple',
    'Symbian',
    'Windows',
    'Black Berry',
    'Jio',
    'Samsung',
    'Chiana'
  ];

  adNwMob(mob: string) {
    this.mobiles.push(mob);
  }
  constructor() { }

  ngOnInit() {
  }

}
