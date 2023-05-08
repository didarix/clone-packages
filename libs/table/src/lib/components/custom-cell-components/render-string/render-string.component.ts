import { Component, Input } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-render-string-cell',
  template: `
    <span>
      {{ rowPlainText ? (rowPlainText | strLimit) : col.emptyCell }}
    </span>
  `,
})
export class RenderStringCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };

  @Input() rowData: any = {};
  sliced: any;
  rowPlainText: any;

  constructor() {}

  ngOnChanges(): void {
    this.rowPlainText = this.col.isNested
      ? this.rowData[this.col.field][this.col.nestedKey].replace(/<[^>]*>/g, '')
      : this.rowData[this.col.field].replace(/<[^>]*>/g, '');
  }
}
