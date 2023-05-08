import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-text-left-icon',
  template: `
    <div class="text-icon d-flex" [ngStyle]="fieldInlineStyle">
      <div class="p-input-icon-left p-input-icon-right">
        <i class="pi icon-container">
          <img [src]="leftIcon" />
        </i>

        <input
          type="input-R-Icon"
          pInputText
          [formControl]="formControl"
          [formlyAttributes]="field"
          [ngClass]="showError ? 'ng-invalid ng-dirty' : ''"
          [ngStyle]="showError ? fieldInlineStyle?.inputErrorStyle : ''"
        />
      </div>

      <img
        class="text-icon__error-icon"
        *ngIf="showError && errorICon"
        [src]="errorICon"
      />
    </div>
  `,
  styleUrls: ['./text-left-icon.component.scss'],
})
export class TextIconComponent extends FieldType implements OnInit {
  errorICon: string = '../../../../assets/media/icons/error-icon.svg';
  leftIcon: string = '../../../../assets/media/icons/username.png';
  fieldInlineStyle: any;

  ngOnInit() {
    this.getFieldInputsValues();
  }

  getFieldInputsValues() {
    this.errorICon = this.field.templateOptions['outerIcon'];
    this.leftIcon = this.field.templateOptions['leftIcon'];

    this.fieldInlineStyle =
      this.field.templateOptions['fieldInlineStyle'] || '3rem';
  }
}
