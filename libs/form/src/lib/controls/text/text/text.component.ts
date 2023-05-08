import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-text',
  template: ` <div
    class="text-field-container d-flex"
    [ngStyle]="fieldInlineStyle"
  >
    <span class="p-input-icon-left p-input-icon-right">
      <input
        pInputText
        [type]="'input-R-Icon'"
        [placeholder]="to.placeholder"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [ngStyle]="showError ? fieldInlineStyle?.inputErrorStyle : ''"
      />
    </span>

    <img
      class="text-icon__error-icon"
      *ngIf="showError && errorICon"
      [src]="errorICon"
    />
  </div>`,
  styleUrls: ['./text.component.scss'],
})
export class TextComponent extends FieldType implements OnInit {
  errorICon: string = '../../../../assets/media/icons/error-icon.svg';
  fieldInlineStyle: any;

  ngOnInit() {
    this.getFieldInputsValues();
  }

  getFieldInputsValues() {
    this.errorICon = this.field.templateOptions['outerIcon'];

    this.fieldInlineStyle = this.field.templateOptions['fieldInlineStyle'] || {
      gap: '3rem',
    };
  }
}
