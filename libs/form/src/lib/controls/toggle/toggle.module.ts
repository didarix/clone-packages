import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle/toggle.component';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.toggle,
          component: ToggleComponent,
          wrappers: ['form-field'],
          defaultOptions: {
            templateOptions: {
              activeColor: '#49a487',
            },
          },
        },
      ],
    }),
  ],
})
export class ToggleModule { }
