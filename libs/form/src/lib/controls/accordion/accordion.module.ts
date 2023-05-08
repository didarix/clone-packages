import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { AccordionComponent } from './accordion/accordion.component';
import { YouxelCoreModule } from '@youxel/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.accordion,
          component: AccordionComponent,
        },
      ],
    }),
  ],
})
export class AccordionModule {}
