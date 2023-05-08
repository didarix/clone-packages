import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

// TODO: add dynamic background
// TODO: add padding 0 to fix issue with wrapper
@Component({
  selector: 'app-toggle',
  template: `
    <p-inputSwitch
      [formControl]="formControl"
      [formlyAttributes]="field"
      [required]="to.required"
    ></p-inputSwitch>
  `,
  styles: [
    `
      ::ng-deep .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
        background: #49a487 !important;
      }
    `,
  ],
})
export class ToggleComponent extends FieldType {}
