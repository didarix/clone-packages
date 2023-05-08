import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DataTableComponent } from './table-builder.component';
import { YouxelCoreModule } from '@youxel/core';

import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { TableToolbarComponent } from './components/table-toolbar/table-toolbar.component';
import { ProgrammaticControlComponent } from './components/table-programmatic-control/programmatic-control.component';
import { ModalComponent } from './components/modal/modal.component';
import { YouxelTableComponent } from './components/youxel-table/youxel-table.component';
import { YouxelClientSideTableComponent } from './components/youxel-clientSide-table/youxel-clientSide-table.component';
import { YouxelFormModule } from '@youxel/form';
import { ImageStringCellComponent } from './components/custom-cell-components/image-with-string/image-string-cell.component';
import { ImageCellComponent } from './components/custom-cell-components/image-cell/image-cell.component';
import { DateCellComponent } from './components/custom-cell-components/date-cell/date-cell.component';
import { StringCellComponent } from './components/custom-cell-components/string-cell/string-cell.component';
import { ActionsCellComponent } from './components/custom-cell-components/actions-cell/actions-cell.component';
import { InputSwitchCellComponent } from './components/custom-cell-components/input-switch-cell/input-switch-cell.component';
import { ValidateActionDirective } from './components/directives/validate-actions.directive';
import { RenderStringCellComponent } from './components/custom-cell-components/render-string/render-string.component';
import { CustomeCellComponent } from './components/custom-cell-components/custome-cell/custome-cell.component';
import { TableDateTimeCellComponent } from './components/custom-cell-components/date-time-cell/table-date-time-cell.component';
import { DecryptedStringComponent } from './components/custom-cell-components/decrypted-string/decrypted-string.component';
import { TablesRolesComponent } from './components/custom-cell-components/tables-roles/tables-roles.component';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

const COMPONENTS = [
  RenderStringCellComponent,
  DataTableComponent,
  YouxelClientSideTableComponent,
  YouxelTableComponent,
  ListFilterComponent,
  ProgrammaticControlComponent,
  TableToolbarComponent,
  ModalComponent,
  ImageStringCellComponent,
  ImageCellComponent,
  DateCellComponent,
  StringCellComponent,
  CustomeCellComponent,
  ActionsCellComponent,
  InputSwitchCellComponent,
  ValidateActionDirective,
  TableDateTimeCellComponent,
  DecryptedStringComponent,
  TablesRolesComponent,
];

const BASEMODULES = [CommonModule, TranslateModule];

const MODULES = [YouxelCoreModule, TableModule, YouxelFormModule, SharedModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES, ...BASEMODULES],
  exports: [...COMPONENTS],
})
export class YouxelTableModule {}
