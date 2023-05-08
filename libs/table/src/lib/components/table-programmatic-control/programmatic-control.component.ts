import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'youxel-programmatic-control',
  templateUrl: './programmatic-control.component.html',
  styleUrls: ['./programmatic-control.component.scss']
})
export class ProgrammaticControlComponent implements OnInit {

  @Input() first: number = 1;
  @Input() rows: number;
  @Input() data: any[]=[];
  constructor() {
  }

  ngOnInit() {
  }


  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.data ? this.first === (this.data.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.data ? this.first === 0 : true;
  }

}
