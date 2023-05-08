import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LanguageService } from '@youxel/core';
import { YxlTableService } from '../../services/yxl-table.service';

@Component({
  selector: 'youxel-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() fields: FormlyFieldConfig[];
  @Input() model: { [key: string]: any };
  @Input() filterBtnStyle: any;
  @Input() buttonsText = {
    apply: 'TABLE.FILTER.APPLY',
    close: 'TABLE.FILTER.CLOSE',
  };

  @Output() closeFilterPopup = new EventEmitter();
  @Output() filteredData = new EventEmitter();


  filterpopup: boolean = false;
  @Input() isActive: boolean = false;

  constructor(
    private yxlTableService: YxlTableService,
    public languageService: LanguageService
  ) {

  }

  ngOnInit() {
  }


  openFilter() {
    this.filterpopup = true;
  }

  closeFilter() {
    this.filterpopup = this.isActive = false;
    this.formGroup.reset();
    this.closeFilterPopup.emit(this.formGroup)
  }
  sendFilterData() {
    this.filteredData.emit(this.formGroup);
    this.filterpopup = false;
    this.isActive = true;
    this.yxlTableService.search$.next({ ...this.formGroup.value })
  }

  hideFilterPopup() {
    this.filterpopup = false;
  }
}
