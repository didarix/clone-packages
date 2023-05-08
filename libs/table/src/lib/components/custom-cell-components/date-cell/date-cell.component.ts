import { Component, Input } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-date-cell',
  template: ` <span
      *ngIf="col.isNested; else ifNotNested"
      [ngStyle]="
        col.customStyles?.customCellDesign
          ? col.customStyles?.customCellDesign
          : ''
      "
    >
      {{
        rowData[col.field]
          ? (rowData[col.field][col.nestedKey]
            | date: col.dateFormate ?? 'MM-d-yyyy')
          : col.emptyCell
      }}
    </span>

    <ng-template #ifNotNested>
      <div
        [ngStyle]="
          col.customStyles?.customCellDesign
            ? col.customStyles?.customCellDesign
            : ''
        "
      >
        {{
          rowData[col.field]
            ? (rowData[col.field] | date: col.dateFormate ?? 'MM-d-yyyy')
            : col.emptyCell
        }}
      </div>
    </ng-template>`,
})
export class DateCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };
  @Input() rowData: any = {};

  constructor() {}
}
