import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service:Adal4Service){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if(!this.service.userInfo.authenticated){
        this.service.login();
        return false;        
      }
  }
}
