import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-numbers',
  template: `
    <input
      type="number"
      pInputText
      [formControl]="formControl"
      [formlyAttributes]="field"
      [ngClass]="showError ? 'ng-invalid ng-dirty' : ''"
    />
  `,
  styleUrls: ['./numbers.component.scss'],
})
export class numbersComponenet extends FieldType {}
