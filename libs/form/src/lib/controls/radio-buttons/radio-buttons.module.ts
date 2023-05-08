import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { YouxelCoreModule } from '@youxel/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { SharedModule } from '../../shared/shared.module';

// TODO: add wrapper
@NgModule({
  declarations: [RadioButtonsComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.radioButtons,
          component: RadioButtonsComponent,
        },
      ],
    }),
    FormlySelectModule,
  ],
})
export class RadioButtonsModule {}
