import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import {
  IColumnsOptions,
  ITableActions,
  ITableOptions,
  ITranslatedItemsFromEndUser,
  UrlListItem,
} from './models/interfaces';

import { YxlTableService } from './services/yxl-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './table-builder.component.html',
  styleUrls: ['./table-builder.component.scss'],
})
export class DataTableComponent implements OnInit, DoCheck {
  @Input() data: any = [];
  @Input() urls: UrlListItem;
  @Input() columns: IColumnsOptions[];
  @Input() options: ITableOptions;
  @Input() actions: ITableActions;
  @Input() id = 'id';

  /**
   * all needed translation text for table package
   *
   *  the actions col header
   *
   * text for the model header
   *
   * text for the model button
   *
   * text for the model button
   *
   */

  @Input() tableTranslatedItemsFromEndUser: ITranslatedItemsFromEndUser = {};

  @Output() onSendUserInfo: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStatusChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onItemDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onGetData: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSortData: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditItem: EventEmitter<any> = new EventEmitter<any>();

  @Output() onFilterReseted: EventEmitter<any> = new EventEmitter<any>();

  tableTranslatedItems: ITranslatedItemsFromEndUser = {
    actionColHeader: 'Actions',
    modelHeaderText: 'Delete Confirmation',
    modelButtonsText: {
      cancel: 'Cancel',
      delete: 'Delete',
    },
    paginationTranslationTxt: {
      showing: 'Showing',
      off: 'Off',
    },
    filterKey: {
      resetAll: 'Reset All',
      results: 'Results',
    },
    modelDeleteActionName: 'Delete',
    confirmationDeleteMsg: 'Delete Confirmation',
  };

  constructor(public service: YxlTableService) {}

  ngOnInit(): void {}

  ngDoCheck() {
    this.toggleResultFilter();
  }

  toggleResultFilter() {
    const searchValueLength = Object.keys(this.service.search$.value).length;
    if (searchValueLength == 0) return false;
    else return true;
  }

  sendUserData(event: any) {
    this.onSendUserInfo.emit(event);
  }

  resetFilter() {
    this.service.initTableData();
    this.service.search$.next({});
    this.onFilterReseted.emit();
  }

  onClickEditItem(event) {
    this.onEditItem.emit(event);
  }

  ngOnChanges(): void {
    this.tableTranslatedItems = {
      ...this.tableTranslatedItems,
      ...this.tableTranslatedItemsFromEndUser,
    };
  }
}
