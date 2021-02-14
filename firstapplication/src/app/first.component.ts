import { Component } from '@angular/core';

@Component( {
    selector : "first-app",
    templateUrl : "./first.component.html"
  
})
export class FirstComponent{

    private orderId:string;
    private orderName:string;
    private desc : string; 

    constructor(){
        this.orderId = "12345";
        this.orderName = "SAMSUNG Mobile";
        this.desc = "quality good"
    }

    public getOrderId() : string{
        return this.orderId;
    }

    public getOrderName() : string{
        return this.orderName;
    }

    public getOrderDesc() : string{
        return this.desc;
    }
    

}