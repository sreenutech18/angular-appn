import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {

  var_two : any;

  constructor() { 
    this.var_two = "************Accounts Details*******************";
  }

  ngOnInit(): void {
  }

}
