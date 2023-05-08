import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { BreadcrumbService } from './service/breadcrumb';
/*
https://kimsereyblog.blogspot.com/2017/08/implement-breadcrumb-in-angular-with.html
*/
@Component({
  selector: 'breadcrumb-via-route',
  template: `<p-breadcrumb [model]="crumbs$ | async"></p-breadcrumb>`
})
export class BreadcrumbViaRouteComponent implements OnInit {


  crumbs$: Observable<MenuItem[]>;

  constructor(private breadcrumb: BreadcrumbService) { }

  ngOnInit() {
    this.crumbs$ = this.breadcrumb.crumbs$;
  }
}
