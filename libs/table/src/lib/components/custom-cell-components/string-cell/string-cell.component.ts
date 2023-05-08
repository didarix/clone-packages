import { Component, Input } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-string-cell',
  template: `
    <span
      *ngIf="col.isNested; else ifNotNested"
      [ngStyle]="
        col.customStyles?.customCellDesign
          ? col.customStyles?.customCellDesign
          : ''
      "
    >
      {{
        rowData[col.field]
          ? (rowData[col.field][col.nestedKey] + (col.appendAfter || '')
            | strLimit)
          : col.emptyCell
      }}
    </span>

    <ng-template
      #ifNotNested
      [ngStyle]="
        col.customStyles?.customCellDesign
          ? col.customStyles?.customCellDesign
          : ''
      "
    >
      {{
        rowData[col.field]
          ? (rowData[col.field] + (col.appendAfter || '') | strLimit)
          : col.emptyCell
      }}
    </ng-template>
  `,
})
export class StringCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };

  @Input() rowData: any = {};

  constructor() {}
}
