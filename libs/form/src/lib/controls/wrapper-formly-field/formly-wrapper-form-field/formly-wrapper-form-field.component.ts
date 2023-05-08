import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-wrapper-form-field',
  template: `
    <div class="p-field" [class]="to['fieldConfig']?.containerControlClassName">
      <label
        *ngIf="to.label && to['hideLabel'] !== true"
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

      <span
        *ngIf="to.description"
        [class]="to?.fieldConfig?.descriptionClassName"
      >
        {{ to.description }}
      </span>

      <div [class]="to['fieldConfig']?.controlClassName">
        <div
          [class.p-input-icon-left]="to['fieldConfig']?.leftIcon"
          [class.p-input-icon-right]="to['fieldConfig']?.rightIcon"
        >
          <i class="pi" *ngIf="to['fieldConfig']?.leftIcon">
            <img [src]="to?.fieldConfig?.leftIcon" />
          </i>
          <ng-container #fieldComponent></ng-container>
          <i class="pi" *ngIf="to['fieldConfig']?.rightIcon">
            <img [src]="to?.fieldConfig?.rightIcon" />
          </i>
        </div>
        <app-value-under-dropdown
          *ngIf="to['fieldConfig']?.showValueUnderDropdown"
          [fieldControl]="formControl"
        ></app-value-under-dropdown>

        <small *ngIf="showError" class="p-error">
          <app-formly-validation-message
            class="ui-message-text"
            [class]="to?.fieldConfig?.errorClassName"
            [field]="field"
          ></app-formly-validation-message>
        </small>
      </div>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .p-field {
        margin-bottom: 1.5rem;
        width: 100%;
      }

      .p-field label {
        font-weight: bold;
        font-size: 1.4rem;
        display: block;
        margin-bottom: 0.7rem;
      }

      ::ng-deep .p-calendar {
        width: 100%;
      }

      .p-field ::ng-deep .p-component {
        min-width: 100%;
        border-radius: 5px;
        padding: 0.8rem;
        border-color: #ccc;
      }

      .p-input-icon-left,
      .p-input-icon-right {
        width: 100%;
      }

      .p-input-icon-left ::ng-deep .p-inputtext {
        padding-left: 2.3rem;
      }

      .p-input-icon-right ::ng-deep .p-inputtext {
        padding-left: 2.3rem;
      }

      .required {
        color: #f16b6b;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1;
      }
    `,
  ],
})
export class FormlyWrapperFormFieldComponent
  extends FieldWrapper
  implements OnInit
{
  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
  }
  ngOnInit() {
    setTimeout(() => {
      this.changeDetectorRef.detectChanges();
    });
  }
}
