import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { TapsComponent } from './taps/taps.component';
import { InputFormlyTypes } from '../../enums/form.enum';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TapsComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.taps,
          component: TapsComponent,
        },
      ],
    }),
  ],
})
export class TapsModule {}
