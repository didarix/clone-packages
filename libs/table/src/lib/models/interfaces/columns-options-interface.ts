import { ElementRef } from '@angular/core';
import { ColumnDataTypes } from '../enums/column-data-types-enum';

export interface IColumnsOptions {
  field: string;
  header: string;
  type?: ColumnDataTypes;
  isNested?: boolean;
  nestedKey?: string;
  isNestedImage?: boolean;
  imageUrl?: string;
  loadingError?: string;
  dateFormate?: string;
  customStyles?: ICustomStyles;
  isClicked?: boolean;
  emptyCell?: string;
  hideSort?: boolean;
  filterKey?: string;
  appendAfter?: string;
  action?: (row?: any) => any;
  customText?: (row?: any) => string;
  customTemplate?: (row?: any) => ElementRef;
}

export interface ICustomStyles {
  headerStyle?: any;
  columnStyle?: any;
  customCellDesign?: any;
}
