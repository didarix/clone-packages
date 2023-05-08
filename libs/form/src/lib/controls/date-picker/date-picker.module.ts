import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { YouxelCoreModule } from '@youxel/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    TranslateModule,
    NgxMaterialTimepickerModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.datepicker,
          wrappers: ['form-field'],
          component: DatePickerComponent
        }
      ]
    }),
  ]
})
export class DatePickerModule { }
