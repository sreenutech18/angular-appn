import { Component } from "@angular/core"

@Component({
    selector : 'second-app',
    templateUrl : './second.component.html',
    
})
export class SecondComponent{

    private custId : string;
    private name : string;
    private address : string; 

    constructor(){
        this.custId = "12345";
        this.name =" sreenutech";
        this.address = "hyderbad"
    }

    public getCustId():string{

        return this.custId;
    }

    public getName() : string{
        return this.name;
    }

    public getAddress():string{
        return this.address;
    }

}