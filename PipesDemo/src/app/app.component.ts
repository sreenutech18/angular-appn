import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  var_one : string = "angular"; 
  var_two : string = "NODEJS";
  var_three : string = "sreenu technologies";
  var_four : number = 100;
  var_five : number = 100.12345;
  var_six : number = 0.9;
  var_seven:any = {"wish" :"Welcome To Sreenu Technologies"};
  var_eight : number[] = [10,20,30,40,50];
  var_nine:Date = new Date();
  
}
