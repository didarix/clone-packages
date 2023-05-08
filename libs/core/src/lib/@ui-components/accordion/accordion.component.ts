/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
export interface IAccordionOptions {
  expandIcon?: string;
  collapseIcon?: string;
  accordionTabs?: [];
}

export interface IAccordionTabOptions {
  header?: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  constructor() { }
  @Input() options: IAccordionOptions;
  ngOnInit(): void { }
}
