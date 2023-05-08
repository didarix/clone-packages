import { Component, Input } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-date-time-cell',
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
            | date: col.dateFormate ?? 'MMM d, y')
          : col.emptyCell
      }}

      <p class="mt-2">
        {{
          rowData[col.field]
            ? (rowData[col.field] | date: col.dateFormate ?? 'h:mm a')
            : col.emptyCell
        }}
      </p>
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
            ? (rowData[col.field] | date: col.dateFormate ?? 'MMM d, y')
            : col.emptyCell
        }}

        <p class="mt-2">
          {{
            rowData[col.field]
              ? (rowData[col.field] | date: col.dateFormate ?? 'h:mm a')
              : col.emptyCell
          }}
        </p>
      </div>
    </ng-template>`,
})
export class TableDateTimeCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };
  @Input() rowData: any = {};

  constructor() {}
}
