import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionService } from '../@services';

@Injectable({
  providedIn: 'root'
})
export class InternetConnectionGuard implements CanActivate, CanDeactivate<any> {

  isConnected;

  constructor(private connectionService: ConnectionService) {

    this.connectionService.isConnected().subscribe(res => {
      this.isConnected = res;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.isConnected) return true;

    else {
      this.connectionService.checkConnection();
      return false;
    }
    // return component.canDeactive(nextState);

  }

}
