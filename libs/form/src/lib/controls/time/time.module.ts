import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { TimeComponent } from './time/time.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TimeComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.time,
          component: TimeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class TimeModule {}
