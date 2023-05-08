import { YouxelCoreModule } from '@youxel/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { RepeatComponent } from './repeat/repeat.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';

@NgModule({
  declarations: [RepeatComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.repeat,
          component: RepeatComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class RepeatModule {}
