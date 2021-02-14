import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { OrdersComponent } from './customers/orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './customers/accounts/accounts.component';
import { RedeemptionwebComponent } from './redeemptionweb/redeemptionweb.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    OrdersComponent,
    CustomersComponent,
    AccountsComponent,
    RedeemptionwebComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
