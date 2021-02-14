import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit {

  var_six : any;
  constructor() { 

    this.var_six = "**********Orders Childthree*****************";
  }

  ngOnInit(): void {
  }

}
