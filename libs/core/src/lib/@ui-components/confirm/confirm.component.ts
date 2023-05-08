import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  template: `
    <p-confirmDialog [style]="style" [styleClass]="styleClass" [baseZIndex]="baseZIndex"></p-confirmDialog>
  `,
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() style;
  @Input() baseZIndex;
  @Input() styleClass;

  constructor() { }

  ngOnInit(): void {
  }

}
