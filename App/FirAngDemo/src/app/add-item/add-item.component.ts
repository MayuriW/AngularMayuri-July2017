import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  Items = ["item1","item2","item3"];

  newItem = "";

  addItem = function()
  {
    if(this.newItem !="")
    {
      console.log(" item added is "+this.newItem);
    this.Items.push(this.newItem);
    this.newItem = "";
    }
  }

  RemoveItem = function(index)
  {
    console.log(" item added is "+this.index);
    this.Items.splice(index,1);
    
  }

  
  constructor() { }

  ngOnInit() {
  }

}
