import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { CustomCheckBoxComponent } from './custom-check-box/custom-check-box.component';
import { SharedModule } from '../../shared/shared.module';

// TODO: add wrapper
@NgModule({
  declarations: [CustomCheckBoxComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.customCheckBox,
          component: CustomCheckBoxComponent,
        },
      ],
    }),
  ],
})
export class CustomCheckBoxModule {}
