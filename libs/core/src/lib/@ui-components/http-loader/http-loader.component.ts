import { Component, Input, OnInit } from '@angular/core';
import { Spinkit } from 'ng-http-loader';

@Component({
  selector: 'app-http-loader',
  template: `
    <ng-http-loader
      [backdrop]="backdrop"
      [backgroundColor]="backgroundColor"
      [debounceDelay]="debounceDelay"
      [extraDuration]="extraDuration"
      [minDuration]="minDuration"
      [opacity]="opacity"
      [backdropBackgroundColor]="backdropBackgroundColor"
      [spinner]="spinner"
    ></ng-http-loader>
  `,
})
export class HttpLoaderComponent {
  @Input() backdrop: boolean = true;
  @Input() backgroundColor: string = '#3f1e6d';
  @Input() debounceDelay: string;
  @Input() extraDuration: string;
  @Input() minDuration: string = '300';
  @Input() opacity: string = '0.75';
  @Input() backdropBackgroundColor: string = '#fefefe';
  @Input() spinner: string = Spinkit.skChasingDots;
}
