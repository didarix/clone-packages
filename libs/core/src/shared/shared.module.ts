import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MenuModule } from 'primeng/menu';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

// PrimeNG Modules
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ChartModule } from 'primeng/chart';
import { ToolbarModule } from 'primeng/toolbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { EditorModule } from 'primeng/editor';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';

// ng module

// PrimeNG Services
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { NgSelectModule } from '@ng-select/ng-select';

const MODULES = [
  ToastModule,
  ButtonModule,
  RippleModule,
  TableModule,
  ConfirmDialogModule,
  BreadcrumbModule,
  MessagesModule,
  MessageModule,
  AccordionModule,
  TabViewModule,
  InputTextModule,
  ChartModule,
  CheckboxModule,
  NgApexchartsModule,
  ToolbarModule,
  MenuModule,
  InputSwitchModule,
  OverlayPanelModule,
  RadioButtonModule,
  InputSwitchModule,
  CalendarModule,
  DropdownModule,
  MultiSelectModule,
  AutoCompleteModule,
  MenubarModule,
  AvatarModule,
  AvatarGroupModule,
  NgSelectModule,
  EditorModule,
  SelectButtonModule,
  InputTextareaModule,
  DialogModule,
  DynamicDialogModule,
  DividerModule,
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  providers: [],
  exports: [...MODULES],
})
export class SharedModule {}
