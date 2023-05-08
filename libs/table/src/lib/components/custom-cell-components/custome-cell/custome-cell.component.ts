import { Component, Input } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-custome-cell',
  template: `
    <ng-container
      [ngTemplateOutlet]="
        col.customTemplate ? col.customTemplate(rowData) : default
      "
      [ngTemplateOutletContext]="{ $implicit: rowData }"
    ></ng-container>

    <ng-template let-rowData #default>
      {{ rowData[col.field] }}
    </ng-template>
  `,
})
export class CustomeCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };

  @Input() rowData: any = {};

  constructor() {}
}
