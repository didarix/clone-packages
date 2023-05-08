import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-editor',
  template: `
    <p-editor
      [formControl]="formControl"
      [formlyAttributes]="field"
      (onTextChange)="(null)"
    ></p-editor>
  `,
  styles: [
    `
      ::ng-deep .ql-container.ql-snow {
        height: 150px;
      }
    `,
  ],
})
export class EditorComponent extends FieldType {}
