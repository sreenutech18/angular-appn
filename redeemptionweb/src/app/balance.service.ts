import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { from, Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class BalanceService{

    //write the service client code to communicate with backend systems (api's)
    //and get the response
    //injecting http client
    constructor(public http : HttpClient){}

    public getBalance():Observable<any>{
        return this.http.get("http://localhost:8080/offers-details-service-1.0-SNAPSHOT/offers/0454439373");
        
        
    }


}