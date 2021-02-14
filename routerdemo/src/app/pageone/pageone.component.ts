import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {

  var_one : any;

  constructor() { 
    this.var_one = "**************Customers Details*************";
  }

  ngOnInit(): void {
  }
  

}
