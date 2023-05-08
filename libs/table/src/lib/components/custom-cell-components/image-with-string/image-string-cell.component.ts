import { LanguageService } from '@youxel/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'table-image-string-cell',
  template: `
    <div
      class="image-title"
      *ngIf="col.isNestedImage && col.isNested; else ifNotNested"
    >
      <img
        class="image-data"
        *ngIf="rowData[col.field]"
        [ngStyle]="imageStyle"
        [src]="rowData[col.field][col.imageUrl]"
        (error)="emitLoadError($event)"
        alt=""
      />

      <span
        class="mx-2"
        [ngStyle]="
          col.customStyles?.customCellDesign
            ? col.customStyles?.customCellDesign
            : ''
        "
      >
        {{
          rowData[col.field] ? rowData[col.field][col.nestedKey] : col.emptyCell
        }}
      </span>
    </div>
    <ng-template #ifNotNested>
      <div class="image-title">
        <img
          class="image-data"
          *ngIf="rowData[col.imageUrl]"
          [ngStyle]="imageStyle"
          [src]="rowData[col.imageUrl]"
          (error)="emitLoadError($event)"
          alt=""
        />

        <span
          [ngStyle]="
            col.customStyles?.customCellDesign
              ? col.customStyles?.customCellDesign
              : ''
          "
          [ngClass]="lang() === 'ar' ? 'mr-2' : 'ml-2'"
        >
          {{ rowData[col.field] ? rowData[col.field] : col.emptyCell }}
        </span>
      </div>
    </ng-template>
  `,
  styleUrls: ['./image-string-cell.component.scss'],
})
export class ImageStringCellComponent {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };
  @Input() rowData: any = {};
  @Input() imageStyle: any;
  @Output() emitError: EventEmitter<any> = new EventEmitter<any>();

  constructor(private languageService: LanguageService) {}

  emitLoadError(event) {
    this.emitError.emit(event);
  }

  lang() {
    return this.languageService.currentLanguage();
  }
}
