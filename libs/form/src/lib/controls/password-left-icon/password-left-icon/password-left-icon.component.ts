import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-password-left-icon',
  template: `
    <div class="password-with-icon">
      <div class="ui-widget" *ngIf="to.label">
        <label>
          {{ to.label }}
          <span
            *ngIf="to.required && to.hideRequiredMarker !== true"
            class="required"
            >*</span
          >
        </label>
      </div>

      <span class="p-input-icon-left p-input-icon-right">
        <i class="pi">
          <img [src]="leftIcon" />
        </i>
        <input
          [type]="typePassControl"
          [placeholder]="to.placeholder"
          pInputText
          [formControl]="formControl"
          [formlyAttributes]="field"
          [ngStyle]="showError ? fieldInlineStyle?.inputErrorStyle : ''"
        />
        <i
          class="pi"
          [ngClass]="passwordVisiblity ? 'pi-eye-slash' : 'pi-eye'"
          (click)="togglePassword()"
        ></i>
      </span>

      <!-- Icon appears in the case of error -->
      <img
        class="text-icon__error-icon"
        *ngIf="showError && errorICon"
        [src]="errorICon"
      />
    </div>
  `,
  styleUrls: ['./password-left-icon.component.scss'],
})
export class PasswordLeftIconComponent extends FieldType {
  passwordVisiblity: boolean = false;

  /**
   * this icon appears beside input if there is an error in validation
   * and if it's send by users of the package
   */
  errorICon: string = '../../../../assets/media/icons/error-icon.svg';

  /**
   * this icon appears inside input as indicator of the field
   */

  leftIcon: string = '../../../../assets/media/icons/password.png';

  /**
   * style between input and icon beside it
   */
  fieldInlineStyle: any;

  get typePassControl(): string {
    return this.passwordVisiblity ? 'text' : 'password';
  }

  ngOnInit() {
    this.getFieldInputsValues();
  }

  getFieldInputsValues() {
    this.errorICon = this.field.templateOptions['outerIcon'];
    this.leftIcon =
      this.field.templateOptions['leftIcon'] ||
      'assets/images/icons/username.png';

    this.fieldInlineStyle =
      this.field.templateOptions['fieldInlineStyle'] || '3rem';
  }

  togglePassword() {
    this.passwordVisiblity = !this.passwordVisiblity;
  }
}
