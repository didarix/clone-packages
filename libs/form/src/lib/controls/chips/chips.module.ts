import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums';
import { YouxelCoreModule } from '@youxel/core';

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.chips,
          component: ChipsComponent,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {},
          },
        },
      ],
    }),
  ],
})
export class ChipsModule {}
