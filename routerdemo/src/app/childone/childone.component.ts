import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  var_four : any;

  constructor() {

    this.var_four = " ************Customer ChildOne Details ***************";
   }

  ngOnInit(): void {
  }

}
