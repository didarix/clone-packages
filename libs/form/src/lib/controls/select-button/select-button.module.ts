import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectButtonComponent } from './select-button/select-button.component';

import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums';
import { YouxelCoreModule } from '@youxel/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SelectButtonComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.selectbutton,
          component: SelectButtonComponent,
          wrappers: ['form-field'],

          defaultOptions: {
            templateOptions: {},
          },
        },
      ],
    }),
  ],
})
export class SelectButtonModule {}
