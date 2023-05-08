import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../@services';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: StorageService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let stateRoute;
    this.storage.getItem('permissions').subscribe(data => {
      if (!data)
        stateRoute = false;
      else {
        const listPermission = data.split(',');
        if (listPermission.includes(route.data.permission))
          stateRoute = true;
        else {
          this.router.navigate(['/']);
          stateRoute = false;
        }
      }
    });


    return stateRoute;
  }

}
