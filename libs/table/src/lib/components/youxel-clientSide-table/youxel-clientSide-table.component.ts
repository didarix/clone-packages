import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { SortEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import {
  IColumnsOptions,
  ITableActions,
  ITableOptions,
  UrlListItem,
} from '../../models/interfaces';

import { ColumnDataTypes } from '../../models/enums';

import { ModalComponent } from '../modal/modal.component';
import { YxlTableService } from '../../services/yxl-table.service';
import { LanguageService } from '@youxel/core';
import { ITranslatedItemsFromEndUser } from '../../models/interfaces';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-youxel-clientSide-table',
  templateUrl: './youxel-clientSide-table.component.html',
  styleUrls: ['./youxel-clientSide-table.component.scss'],
})
export class YouxelClientSideTableComponent implements OnInit {
  @Input() data: any = [];
  @Input() columns: IColumnsOptions[];
  @Input() selectedData: any[];
  @Input() options: ITableOptions;
  @Input() actions: ITableActions[] = [];
  @Input() roles: ITableActions[] = [];
  @Input() id = 'id';
  @Input() primaryKey = 'primaryKey';

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

  @Input() urls: UrlListItem;

  @Output() onSelected: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() onItemSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSendUserInfo: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStatusChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() onItemDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onEditItem: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('deleteModal', { static: true }) deleteModal: any;

  columnDataTypes = ColumnDataTypes;
  selectedItem: any[];
  openActionPopup = false;
  expandedRows: {} = {};
  sortOrder = '';
  item: string = '';
  isAscending: boolean;

  constructor(
    public languageService: LanguageService,
    private dialogService: DialogService,
    public service: YxlTableService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  onSort(event: SortEvent) {
    this.isAscending = event.order === -1;
    this.sortOrder = event.field;
  }

  validateAction(event: any): boolean {
    return (
      !event.action.customPermission || event.action.customPermission(event.row)
    );
  }

  validateCustomAction(event: any) {
    return (
      !(event.action.isEdit || event.action.isDelete) &&
      this.validateAction({ action: event.action, row: event.row })
    );
  }
  actionClick(event: any): void {
    this.onItemSelected.emit({ action: event.action, row: event.row });
    return event.action.call ? event.action.call(event.row) : event.callback;
  }

  onRowSelect(event: any): void {
    this.onSelected.emit(this.selectedData);
  }

  onRowUnselect(event: any): void {
    this.onSelected.emit(this.selectedData);
  }
  cellClicked(col: IColumnsOptions, row: any, callback?: any): any {
    if (!col.isClicked) {
      return;
    } else {
      return col.action ? col.action(row) : callback;
    }
  }

  editUserRoles(event): void {
    this.onSendUserInfo.emit(event);
  }

  handleStatusChange(rowData) {
    if (this.urls && this.urls.changeStatus) {
      this.service
        .changeStatus({
          url: this.urls.changeStatus,
          id: rowData.id,
        })
        .subscribe((res) => {
          this.onStatusChanged.emit(rowData);
        });
    } else this.onStatusChanged.emit(rowData);
  }

  onImageError(event, col) {
    if (col.loadingError) event.target.src = col.loadingError;
  }

  applyAction(event) {
    this.selectedItem = event.row;
    if (event.action.isDelete) {
      this.deleteRow(event.row);
    } else if (event.action.isEdit) {
      this.editRow(event.row);
    }
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
      header: this.tableTranslatedItemsFromEndUser?.modelHeaderText,
    });
    ref.onClose.subscribe((res) => {
      if (res) {
        this.onItemDeleted.emit(row);
      }
    });
  }
  editRow(row) {
    this.onEditItem.emit(row);
  }
}
