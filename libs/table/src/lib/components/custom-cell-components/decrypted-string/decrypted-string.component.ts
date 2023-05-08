import { Component, Input, OnInit } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-decrypted-string',
  template: `
    <span>
      {{
        rowData[col.field]
          ? (rowData[col.field] | decryptString | strLimit)
          : col.emptyCell
      }}
    </span>
  `,
})
export class DecryptedStringComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };

  @Input() rowData: any = {};
}
