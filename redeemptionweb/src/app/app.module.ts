import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance.component';
import { BalanceService } from './balance.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
