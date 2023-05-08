import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-multi-select-with-search',
  template: `
    <ng-select
      [formControl]="formControl"
      [formlyAttributes]="field"
      [items]="to.options | formlySelectOptions: field | async"
      [multiple]="true"
      [closeOnSelect]="false"
      [searchable]="true"
      bindLabel="label"
      bindValue="value"
      [placeholder]="to.placeholder"
      [ngClass]="showError ? 'ng-invalid ng-dirty' : ''"
    >
    </ng-select>
  `,
  styles: [
    `
      ::ng-deep .ng-select .ng-select-container {
        min-height: 3rem;
        min-width: 15rem;
      }
    `,
  ],
})
export class MultiSelectWithSearchComponent extends FieldType {}
