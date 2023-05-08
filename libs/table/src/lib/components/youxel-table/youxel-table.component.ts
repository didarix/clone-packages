import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { LanguageService } from '@youxel/core';
import {
  IColumnsOptions,
  ITableActions,
  ITableOptions,
  UrlListItem,
  UrlParam,
} from '../../models/interfaces';

import { TableSortSelectionModes, ColumnDataTypes } from '../../models/enums';

import { ERequestTypes } from '../../models/interfaces/table-options-interface';
import {
  IGetTableData,
  YxlTableService,
} from '../../services/yxl-table.service';
import { ModalComponent } from '../modal/modal.component';
import { ITranslatedItemsFromEndUser } from '../../models/interfaces';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-youxel-table',
  templateUrl: './youxel-table.component.html',
  styleUrls: ['./youxel-table.component.scss'],
})
export class YouxelTableComponent implements OnInit, OnDestroy {
  @Input() data: any = [];
  @Input() urls: UrlListItem;
  @Input() columns: IColumnsOptions[];
  @Input() options: ITableOptions;
  @Input() actions: ITableActions[] = [];
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
  @Input() tableTranslatedItemsFromEndUser: ITranslatedItemsFromEndUser;

  @Output() onSelected: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() onStatusChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onItemDeleted: EventEmitter<any> = new EventEmitter<any>();
  @Output() onGetData: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSortData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('deleteModal', { static: true }) deleteModal: any;
  bindFilter: string;
  sortType: string;
  columnDataTypes = ColumnDataTypes;
  selectedItems: any[];
  openActionPopup = false;
  expandedRows: {} = {};
  sortOrder = '';
  isAscending: boolean;
  selectedData: any[];
  selectedItem: any;
  searchSub: Subscription;

  constructor(
    public languageService: LanguageService,
    public service: YxlTableService,
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.languageService.enableLanguage();
    this.searchSub = this.service.search$.subscribe((resp) => {
      this.defaultOptions();
      this.getServerSideData();
    });
  }

  defaultOptions() {
    this.service.pageOptions = {
      pageSize: 10,
      isServerSide: true,
      addCheckBox: false,
      sortMode: TableSortSelectionModes.Multiple,
      requestType: ERequestTypes.get,
      ...this.options,
    };
  }

  changeRowStatus(row) {
    if (this.urls && this.urls.changeStatus)
      this.service
        .changeStatus({
          url: this.urls.changeStatus,
          id: row.id,
        })
        .subscribe((res) => {
          this.onStatusChanged.emit(row);
        });
    else this.onStatusChanged.emit(row);
  }

  getServerSideData() {
    if (this.urls && this.urls.getAll) this.getAllData({ pageNumber: 1 });
  }

  onPageChange(pageNumber: number) {
    this.getAllData({ pageNumber });
  }

  getAllData({ pageNumber }: UrlParam) {
    const url = this.urls.getAll;
    const initialFilter = this.urls.pindFilterData;
    const requestType = this.options.requestType ?? ERequestTypes.get;
    this.service.pageOptions.pageNumber = pageNumber ?? 1;
    pageNumber = this.service.pageOptions.pageNumber;

    this.dataFactory(requestType, {
      url,
      pageNumber,
      initialFilter,
      orderByValue: [{ colId: this.bindFilter, sort: this.sortType }],
    })().subscribe((res) => {
      this.onGetData.emit(res);
    });
  }

  dataFactory(requestType: ERequestTypes, data: IGetTableData) {
    const switcher = {
      [ERequestTypes.get]: () => {
        return this.service.getAllByGet(data);
      },
      [ERequestTypes.post]: () => {
        return this.service.getAllByPost(data);
      },
    };

    return switcher[requestType];
  }

  selectRow(rowIndex: number) {
    const index = this.selectedItems.indexOf(rowIndex);
    if (index !== -1) this.selectedItems.push(rowIndex);
  }

  onSort(event: SortEvent) {
    this.isAscending = event.order === -1;
    this.sortType = this.isAscending ? 'asc' : 'desc';
    const requestType = this.options.requestType;

    const filtered = this.columns.find((item) => event.field === item.field);
    this.bindFilter =
      filtered && filtered.filterKey ? filtered.filterKey : event.field;
    this.service.colId = `${this.bindFilter}`;
    if (this.isAscending) {
      this.service.sortOrder = `${this.bindFilter}`;
      this.service.sort = 'asc';
    }
    if (!this.isAscending) {
      this.service.sortOrder = `${this.bindFilter}_desc`;
      this.service.sort = 'desc';
    }

    const initialFilter = this.urls.pindFilterData;

    this.dataFactory(requestType, {
      url: this.urls.getAll,
      pageNumber: this.service.pageOptions.pageNumber,
      orderByValue: [{ colId: this.bindFilter, sort: this.sortType }],
      sort: this.sortType,
      colId: this.bindFilter,
      initialFilter,
    })().subscribe((res) => {
      this.onGetData.emit(res);
    });
  }

  paginate(event: any) {
    const pageIndex = event.first / event.rows + 1;
    this.onPageChange(pageIndex);
  }

  applyAction(event) {
    this.selectedItem = event.row;
    this.selectedItem.isHTMLContent = event.action.isHTMLContent;
    this.selectedItem.primaryKey = event.action.primaryKey ?? 'title';
    if (event.action.isDelete) this.deleteRow(event.row);
    else if (event.action.isEdit) this.editRow(event.row);
    else if (event.action.callAsync)
      this.asyncAction(event.row, event.action.callAsync);
  }

  asyncAction(row, asyncAction) {
    asyncAction(row).subscribe(() => this.getAllData({ pageNumber: 1 }));
  }

  deleteRow(row) {
    const ref = this.dialogService.open(ModalComponent, {
      data: {
        template: this.deleteModal,
        rowData: row,
        buttons: {
          cancel:
            this.tableTranslatedItemsFromEndUser?.modelButtonsText?.cancel,
          delete:
            this.tableTranslatedItemsFromEndUser?.modelButtonsText?.delete,
        },
      },
      header:
        this.tableTranslatedItemsFromEndUser?.modelHeaderText ||
        'Delete Confirmation',
    });

    ref.onClose.subscribe((res) => {
      if (res && this.urls.delete)
        this.service
          .deleteItem({ url: this.urls.delete, id: row.id })
          .subscribe((res) => {
            this.onItemDeleted.emit(true);
            this.getAllData({
              pageNumber: this.service.pageOptions.pageNumber,
            });
          });
    });
  }

  editRow(row) {
    this.router.navigate(['edit/' + row.id], { relativeTo: this.route.parent });
  }

  onRowSelect(event: any): void {
    this.selectedData = event;
  }

  onRowUnselect(event: any): void {
    this.selectedData = event;
  }

  cellClicked(col: IColumnsOptions, row: any, callback?: any): any {
    if (!col.isClicked) return;
    return col.action ? col.action(row) : callback;
  }
  onImageError(event, col) {
    if (col.loadingError) event.target.src = col.loadingError;
  }
  getSelected(selected: any[]): void {
    this.selectedData = selected;
  }

  ngOnDestroy() {
    this.searchSub.unsubscribe();
    this.service.initTableData();
  }
}
