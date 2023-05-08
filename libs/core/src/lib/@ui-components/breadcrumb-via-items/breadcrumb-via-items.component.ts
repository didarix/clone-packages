import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'breadcrumb-via-items',
  template: `<p-breadcrumb [model]="crumbs"></p-breadcrumb>`,

})
export class BreadcrumbViaItemsComponent implements OnInit {

  @Input() crumbs: MenuItem[];
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = this.crumbs;
  }

}
