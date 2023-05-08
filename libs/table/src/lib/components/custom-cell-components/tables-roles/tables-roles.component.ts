import { LanguageService } from '@youxel/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IColumnsOptions } from '../../../models/interfaces';

@Component({
  selector: 'tables-roles-cell',
  template: `
    <span class="roles" (click)="sendUserData()">
      <span class="roles-number">
        {{ 'ACCESS_MANAGEMENT.ROLES.SHOW_ROLES' }}
        <span
          *ngIf="!(languageService.currentLanguage() == 'ar')"
          class="p-paginator-icon pi pi-angle-right"
        ></span>
        <span
          *ngIf="languageService.currentLanguage() == 'ar'"
          class="p-paginator-icon pi pi-angle-left"
        ></span>
      </span>
    </span>
  `,

  styleUrls: ['./tables-roles.component.scss'],
})
export class TablesRolesComponent implements OnInit {
  @Input() col: IColumnsOptions = {
    header: '',
    field: '',
  };
  @Input() rowData: any = {};

  @Output() onUserDataChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {}

  sendUserData() {
    this.onUserDataChanged.emit(this.rowData);
  }
}
