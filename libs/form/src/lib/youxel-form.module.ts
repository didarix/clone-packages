import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { DebugFormlyComponent } from './debug-formly/debug-formly.component';
import { YouxelCoreModule } from '@youxel/core';
import {
  CheckboxModule,
  DateModule,
  DatePickerModule,
  DropdownWithSearchModule,
  EditorModule,
  MultiSelectWithSearchModule,
  PasswordLeftIconModule,
  RadioButtonsModule,
  RadioModule,
  RadioStateModule,
  TextareaControlModule,
  TextIconModule,
  TimeModule,
  ToggleModule,
  WrapperFormlyFieldModule,
  PasswordModule,
  TextModule,
  LinkModule,
  LabelModule,
  DropdownModule,
} from './controls';
import { TapsModule } from './controls/taps/taps.module';
import { CustomCheckBoxModule } from './controls/custom-check-box/custom-check-box.module';
import { AccordionModule } from './controls/accordion/accordion.module';
import { RangeTimeModule } from './controls/range-time/range-time.module';
import { TranslateModule } from '@ngx-translate/core';

import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { YouxelFormComponent } from './youxel-form.component';
import { YouxelFormService } from './services/youxel-form.service';
import { SharedModule } from './shared/shared.module';

const IMPORTS = [
  RadioModule,
  CheckboxModule,
  ToggleModule,
  WrapperFormlyFieldModule,
  TimeModule,
  DateModule,
  DatePickerModule,
  MultiSelectWithSearchModule,
  DropdownWithSearchModule,
  DropdownModule,
  TextIconModule,
  PasswordLeftIconModule,
  EditorModule,
  RadioStateModule,
  TextareaControlModule,
  TapsModule,
  CustomCheckBoxModule,
  AccordionModule,
  RangeTimeModule,
  RadioButtonsModule,
  PasswordModule,
  TextModule,
  SharedModule,
  LinkModule,
  LabelModule,
];

const COMPONENTS = [YouxelFormComponent, DebugFormlyComponent];

const EXPORTS = [YouxelFormComponent];
const SERVICES = [YouxelFormService];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    TranslateModule,
    FormlyPrimeNGModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
    }),
    ...IMPORTS,
  ],
  exports: [...EXPORTS],
})
export class YouxelFormModule {}
