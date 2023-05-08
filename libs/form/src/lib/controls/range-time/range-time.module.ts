import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { RangeTimeComponent } from './range-time/range-time.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RangeTimeComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    OverlayPanelModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.rangeTime,
          component: RangeTimeComponent,
        },
      ],
    }),
  ],
})
export class RangeTimeModule {}
