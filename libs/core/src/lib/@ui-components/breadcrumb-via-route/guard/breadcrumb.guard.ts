
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { BreadcrumbService } from '../service/breadcrumb';

@Injectable()
export class BreadcrumbInitializedGuard implements CanActivate {

  constructor(private service: BreadcrumbService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const crumbs = route.data['crumbs'];
    this.service.setCrumbs(crumbs);
    return true;
  }
}
