import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableOptions } from '../../models/interfaces';

@Component({
  selector: 'youxel-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss'],
})
export class TableToolbarComponent implements OnInit {
  @Input() options: ITableOptions;
  constructor() {}

  ngOnInit() {}
}
