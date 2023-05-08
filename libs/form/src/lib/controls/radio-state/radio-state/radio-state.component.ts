import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-radio-state',
  template: `
    <div *ngIf="to.label">
      <label
        *ngIf="to.label && to.hideLabel !== true"
        [for]="id"
        [class]="to?.fieldConfig?.labelClassName"
      >
        <span *ngIf="to?.fieldConfig?.labelIcon">
          <img [src]="to?.fieldConfig?.labelIcon" />
        </span>
        {{ to.label }}
        <span
          *ngIf="to.required && to.hideRequiredMarker !== true"
          class="required"
          >*</span
        >
      </label>
    </div>
    <p-selectButton
      [formControl]="formControl"
      [formlyAttributes]="field"
      [options]="to.options | formlySelectOptions: field | async"
      optionLabel="label"
      optionValue="value"
      [required]="to.required"
    ></p-selectButton>
  `,
  styles: [
    `
      label {
        font-size: 1.6rem;
        font-weight: bold;
        color: #23292f;
        display: block;
        margin-bottom: 0.3rem;
      }

      label span {
        color: #f16b6b;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
      }

      ::ng-deep .p-buttonset .p-button {
        margin: 0.2rem 0.3rem !important;
        border: 1px solid #ccc !important;
        border-radius: 40px !important;
        font-size: 1.2rem;
        padding: 0.2rem 1rem;
      }

      ::ng-deep .p-selectbutton .p-button.p-highlight {
        background: #3f1e6d !important;
        border-color: #3f1e6d !important;
      }

      ::ng-deep .p-button:focus {
        box-shadow: 0 0 0 0rem;
      }
    `,
  ],
})
export class RadioStateComponent extends FieldType {}
