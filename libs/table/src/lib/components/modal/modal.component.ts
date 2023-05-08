import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'Delete-confirm-dailog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  title: string;
  template: any;
  rowData: any;

  @Input() buttonsText = {
    delete: this.translateService.instant('MODEL.delete') || 'Delete',
    cancel: this.translateService.instant('MODEL.Cancel') || 'Cancel',
  };

  @Output() passEntry: EventEmitter<boolean> = new EventEmitter();
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.template = this.config.data.template;
    this.rowData = this.config.data.rowData;
    this.buttonsText.cancel = this.config.data?.buttons?.cancel;
    this.buttonsText.delete = this.config.data?.buttons?.delete;
  }

  confirm(data) {
    this.ref.close(data);
  }
  close() {
    this.ref.close();
  }
}
