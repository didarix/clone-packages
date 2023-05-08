import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-image-cell',
  template: ` <img
      *ngIf="col.isNested; else ifNotNested"
      [ngStyle]="imageStyle"
      [src]="rowData[col.field][col.nestedKey]"
      (error)="emitLoadError($event)"
      alt=""
    />

    <ng-template #ifNotNested>
      <img
        [ngStyle]="imageStyle"
        [src]="rowData[col.field]"
        (error)="emitLoadError($event)"
        alt=""
      />
    </ng-template>`,
  styleUrls: ['./image-cell.component.scss'],
})
export class ImageCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };
  @Input() rowData: any = {};
  @Input() imageStyle: any;
  @Output() emitError: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  emitLoadError(event) {
    this.emitError.emit(event);
  }
}
