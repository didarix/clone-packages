import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-check-box',
  template: `
    <ng-container *ngFor='let option of to.options| formlySelectOptions: field | async'>
      <p-checkbox
        class='container-checkBox'
        [formControl]='formControl'
        [formlyAttributes]='field'
        [value]="option['value']"
        [label]="option['label']"
        [disabled]="option['disabled']"
        [required]='to.required'></p-checkbox>
    </ng-container>
  `,
  styles: [`
    .container-checkBox {
      margin-inline-end: 1rem;
    }
  `]
})
export class CheckBoxComponent extends FieldType {
}
