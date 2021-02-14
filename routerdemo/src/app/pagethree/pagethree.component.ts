import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {

  var_three : any;

  constructor() { 

    this.var_three = "**********Order Details********************"
  }

  ngOnInit(): void {
  }

}
