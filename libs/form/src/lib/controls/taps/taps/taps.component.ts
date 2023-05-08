import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-taps',
  template: `
    <p-tabView [class]="to['className']">
      <p-tabPanel
        *ngFor="let tab of field.fieldGroup; let i = index; let last = last"
        [header]="tab.templateOptions.label"
      >
        <formly-field [field]="tab"></formly-field>
      </p-tabPanel>
    </p-tabView>
  `,
})
export class TapsComponent extends FieldType {}
