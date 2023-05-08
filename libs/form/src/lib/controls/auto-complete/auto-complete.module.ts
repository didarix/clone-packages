import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { YouxelCoreModule } from '@youxel/core';
import { SharedModule } from '../../shared/shared.module';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums';

@NgModule({
  declarations: [
    AutoCompleteComponent
  ],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.autoComplete,
          wrappers: ['form-field'],
          component: AutoCompleteComponent,
        },
      ],
    }),
  ]
})
export class AutoCompleteModule { }
