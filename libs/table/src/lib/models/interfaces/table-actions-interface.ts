import { Observable } from 'rxjs';

export interface ITableActions {
  name?: string;
  icon?: string;
  show?: boolean;
  permission?: string;
  isDelete?: boolean;
  isBlock?: boolean;
  isEdit?: boolean;
  isDetails?: boolean;
  isHTMLContent?: boolean;
  primaryKey?: string;
  call?: (row?: {}) => any;
  callAsync?: (row?: {}) => Observable<any>;
  customPermission?: (row?: {}) => boolean;
}

export interface IActionList {
  [key: string]: ITableActions;
}
