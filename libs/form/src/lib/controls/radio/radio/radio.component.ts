import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-radio',
  template: `
    <!-- TODO: try to access the formlySelectOptions to custom bind the binned key and binned value -->
    <ng-container
      *ngFor="let item of to.options | formlySelectOptions: field | async"
    >
      <p-radioButton
        class="radio-container"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [value]="item['value']"
        [label]="item['label']"
        [disabled]="item['disabled']"
        [required]="to.required"
        styleClass="radio-button"
      ></p-radioButton>
    </ng-container>
  `,
  styles: [
    `
      .radio-container {
        margin-inline-end: 1rem;
      }
    `,
  ],
})
export class RadioComponent extends FieldType {}
