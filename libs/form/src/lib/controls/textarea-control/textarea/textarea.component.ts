import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea
      pInputTextarea
      [formControl]="formControl"
      [rows]="to.rows"
      [cols]="to.cols"
      [formlyAttributes]="field"
      [disabled]="to.disabled"
      [placeholder]="to.placeholder"
    ></textarea>
  `,
})
export class TextareaComponent extends FieldType {}
