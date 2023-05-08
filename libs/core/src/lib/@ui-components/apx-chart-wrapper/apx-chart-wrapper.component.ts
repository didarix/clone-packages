import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStates, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';


@Component({
  selector: 'app-apx-chart-wrapper',
  template: `<apx-chart [series]="series" [plotOptions]="plotOptions" [colors]="colors" [chart]="chart" [title]="title">
</apx-chart>
`
})
export class ApxChartWrapperComponent implements OnInit {
  @Input() chart: ApexChart;
  @Input() annotations: ApexAnnotations;
  @Input() colors: string[];
  @Input() dataLabels: ApexDataLabels;
  @Input() series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  @Input() stroke: ApexStroke;
  @Input() labels: string[];
  @Input() legend: ApexLegend;
  @Input() fill: ApexFill;
  @Input() tooltip: ApexTooltip;
  @Input() plotOptions: ApexPlotOptions;
  @Input() responsive: ApexResponsive[];
  @Input() xaxis: ApexXAxis;
  @Input() yaxis: ApexYAxis | ApexYAxis[];
  @Input() grid: ApexGrid;
  @Input() states: ApexStates;
  @Input() title: ApexTitleSubtitle;
  @Input() subtitle: ApexTitleSubtitle;
  @Input() theme: ApexTheme;
  constructor() { }

  ngOnInit() {
  }

}
