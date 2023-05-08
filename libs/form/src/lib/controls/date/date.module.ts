import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { DateComponent } from './date/date.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DateComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.date,
          component: DateComponent,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              date: {
                dateFormate: 'mm-dd-yy',
              },
            },
          },
        },
      ],
    }),
  ],
})
export class DateModule {}
