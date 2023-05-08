import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

// TODO: add custom format AM/24
@Component({
  selector: 'app-time',
  template: `
    <p-calendar
      [timeOnly]="true"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="to.required"
      [hourFormat]="12"
      [ngClass]="showError ? 'ng-invalid ng-dirty' : ''"
    ></p-calendar>
  `,
  styles: [
    `
      ::ng-deep .p-calendar .p-inputtext {
        min-height: 3rem;
        min-width: 15rem;
      }
    `,
  ],
})
export class TimeComponent extends FieldType {}
