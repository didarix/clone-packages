import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { RadioStateComponent } from './radio-state/radio-state.component';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SharedModule } from '../../shared/shared.module';

// TODO: add wrapper
@NgModule({
  declarations: [RadioStateComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.radioState,
          component: RadioStateComponent,
        },
      ],
    }),
    FormlySelectModule,
  ],
})
export class RadioStateModule {}
