import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { numbersComponenet } from './numbers/numbers.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { YouxelCoreModule } from '@youxel/core';
import { InputFormlyTypes } from '../../enums';

@NgModule({
  declarations: [numbersComponenet],
  imports: [
    CommonModule,
    YouxelCoreModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.numbers,
          component: numbersComponenet,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class NumbersModule {}
