import { NgHttpLoaderModule } from 'ng-http-loader';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogService } from 'primeng/dynamicdialog';

import { ConfirmationService, MessageService } from 'primeng/api';

// Custom Services
import { INTERCEPTORS } from './@interceptors';

// Components
import {
  BreadcrumbService,
  BreadcrumbInitializedGuard,
  ChartComponent,
  HttpLoaderComponent,
  InlineMessagesComponent,
  SeveritiesMessagesComponent,
  BreadcrumbViaItemsComponent,
  BreadcrumbViaRouteComponent,
  ApxChartWrapperComponent,
  ConfirmComponent,
  EmptyDataComponent,
  ModalComponent,
} from './@ui-components';
import {
  DayAgoPipe,
  HoursFormat,
  StringLimitPipe,
  DecryptStringPipe,
} from './@pipes';
import { RtlDirective } from './@directives/rtl.directive';
import { PermissionCheckDirective } from './@directives/permission-check.directive';
import { CoreConfigService } from './@services/CoreConfig.service';
import { IYouxelEnvironment } from './interfaces/environment.interface';
import { SharedModule } from '../shared/shared.module';

const BASICMODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  NgHttpLoaderModule.forRoot(),
];

const MODULES = [SharedModule];

const SERVICES = [
  MessageService,
  ConfirmationService,
  BreadcrumbService,
  BreadcrumbInitializedGuard,
  DialogService,
  CoreConfigService,
];

const PIPES = [DayAgoPipe, StringLimitPipe, HoursFormat, DecryptStringPipe];
const DIRECTIVES = [];

const COMPONENTS = [
  BreadcrumbViaItemsComponent,
  BreadcrumbViaRouteComponent,
  HttpLoaderComponent,
  InlineMessagesComponent,
  SeveritiesMessagesComponent,
  ChartComponent,
  ConfirmComponent,
  ApxChartWrapperComponent,
  EmptyDataComponent,
  ModalComponent,
  RtlDirective,
  PermissionCheckDirective,
];

@NgModule({
  imports: [...MODULES, ...BASICMODULES],
  declarations: [...PIPES, ...DIRECTIVES, ...COMPONENTS],
  exports: [
    // ...MODULES,
    ...BASICMODULES,
    ...PIPES,
    ...DIRECTIVES,
    ...COMPONENTS,
  ],
})
export class YouxelCoreModule {
  public static forRoot(items: {
    environment: IYouxelEnvironment;
    userTokenKey?: string;
    userLanguageKey?: string;
  }): ModuleWithProviders<YouxelCoreModule> {
    return {
      ngModule: YouxelCoreModule,
      providers: [
        ...SERVICES,
        ...INTERCEPTORS,
        { provide: 'config', useFactory: CoreConfigService, useValue: items },
      ],
    };
  }
}
