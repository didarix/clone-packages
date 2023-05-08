import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { FormlyModule } from '@ngx-formly/core';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '..';
import { InputFormlyTypes } from '../../enums/form.enum';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    TranslateModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.text,
          component: TextComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  declarations: [TextComponent],
})
export class TextModule {}
