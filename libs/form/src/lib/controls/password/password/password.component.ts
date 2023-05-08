import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-password',
  template: `
    <div class="password d-flex" [ngStyle]="fieldInlineStyle">
      <span class="p-input-icon-left p-input-icon-right">
        <input
          pInputText
          [type]="'password'"
          [placeholder]="to.placeholder"
          [formControl]="formControl"
          [formlyAttributes]="field"
          [ngStyle]="showError ? fieldInlineStyle?.inputErrorStyle : ''"
        />

        <i
          *ngIf="to['showRightIcon']"
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
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent extends FieldType {
  errorICon: string = '../../../../assets/media/icons/error-icon.svg';

  rightIcon: string = '';
  fieldInlineStyle: any;
  passwordVisiblity: boolean = false;

  get typePassControl(): string {
    return this.passwordVisiblity ? 'text' : 'password';
  }

  ngOnInit() {
    this.getFieldInputsValues();
  }

  getFieldInputsValues() {
    this.errorICon = this.field.templateOptions?.['outerIcon'];
    this.rightIcon = this.field.templateOptions?.['rightIcon'];
    this.fieldInlineStyle =
      this.field.templateOptions?.['fieldInlineStyle'] || '3rem';
  }

  togglePassword() {
    this.passwordVisiblity = !this.passwordVisiblity;
  }
}
