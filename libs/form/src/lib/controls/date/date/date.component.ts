import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-date',
  template: `
    <p-calendar
      [formControl]="formControl"
      [formlyAttributes]="field"
      [maxDate]="to['date']?.maxDate"
      [placeholder]="to.placeholder"
      [selectOtherMonths]="to['selectOtherMonths']"
      [minDate]="to['date']?.minDate"
      [dateFormat]="to['date']?.dateFormate"
      [disabledDates]="to['date']?.disabledDates"
      [disabledDays]="to['date']?.disabledDays"
      [required]="to.required"
      [inline]="to['inline']"
      [styleClass]="to['styleClass']"
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
export class DateComponent extends FieldType {}
