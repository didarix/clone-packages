import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { TextareaComponent } from './textarea/textarea.component';
import { InputFormlyTypes } from '../../enums/form.enum';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.textareaControl,
          component: TextareaComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class TextareaControlModule {}
