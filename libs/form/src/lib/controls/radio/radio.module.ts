import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { RadioComponent } from './radio/radio.component';
import { YouxelCoreModule } from '@youxel/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SharedModule } from '../../shared/shared.module';

// TODO: add wrapper
@NgModule({
  declarations: [RadioComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.radio,
          component: RadioComponent,
        },
      ],
    }),
    FormlySelectModule,
  ],
})
export class RadioModule {}
