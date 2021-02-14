import { analyzeNgModules } from "@angular/compiler";
import { Component } from '@angular/core'
import { BalanceService } from "./balance.service";


@Component( { selector:'balance-app',
            templateUrl:'./balance.component.html'})
export class BalanceComponent{

   public response : any;

   constructor( public balanceService : BalanceService){}

   ngOnInit(){

    this.balanceService.getBalance().subscribe((data: any[])=>{
        console.log("Response is  :"+data);
        this.response = data;
      })  

   }




}