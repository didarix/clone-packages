import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { TextIconComponent } from './text-icon/text-left-icon.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TextIconComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.textLeftIcon,
          component: TextIconComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class TextIconModule {}
