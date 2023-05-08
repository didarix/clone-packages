import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITableActions } from '../../../models/interfaces';

@Component({
  selector: 'actions-cell',
  templateUrl: './actions-cell.component.html',
  styleUrls: ['./actions-cell.component.scss'],
})
export class ActionsCellComponent implements OnInit {
  @Input() actions: ITableActions[] = [];
  @Input() rowData: any;

  @Output() onItemSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  validateAction(action: ITableActions, row: any): boolean {
    return !action.customPermission || action.customPermission(row);
  }

  validateCustomAction(action: ITableActions, row: any) {
    return (
      !(action.isEdit || action.isDelete) && this.validateAction(action, row)
    );
  }

  actionClick(action: ITableActions, row: any, callback?: any): any {
    this.onItemSelected.emit({ action, row });
    if (action.call) return action.call(row);
    if (action.callAsync) return action.callAsync(row);
    return callback;
  }
  closeAftersSelect(event) {
    event.overlayVisible = false;
  }
}
