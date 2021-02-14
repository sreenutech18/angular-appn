import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

canActivate():boolean{
    //Design
    return confirm(`do you want to enter into customers ??`);
};

canDeactivate():boolean{
    return confirm(`do you want to leave Accounts ??`);
};

canActivateChild():boolean{
    return confirm(`do you want to enter into childthree ??`);
};


validatePage():boolean{
  return confirm('verify the data ');
}
}
