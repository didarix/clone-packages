import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from './enum/chart-type.enum';

@Component({
  selector: 'app-chart',
  template: `
    <div class="card">
      <p-chart [type]="type" [data]="data"></p-chart>
    </div>
  `,
})
export class ChartComponent implements OnInit {
  @Input() type: ChartType;
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
