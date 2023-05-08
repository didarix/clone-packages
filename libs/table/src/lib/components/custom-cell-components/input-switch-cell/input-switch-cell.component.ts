import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-input-switch-cell',
  template: `
    <p-inputSwitch
      (onChange)="emitStatusChange(rowData)"
      [(ngModel)]="rowData[col.field]"
    ></p-inputSwitch>
  `,
})
export class InputSwitchCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };
  @Input() rowData: any = {};
  @Output() statusChangedEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
  emitStatusChange(row: any): void {
    this.statusChangedEmitter.emit(row);
  }
}
