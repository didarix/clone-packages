import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { LabelComponent } from './label/label.component';
import { InputFormlyTypes } from '../../enums';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    LabelComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.label,
          component: LabelComponent,
          wrappers: ['form-field']
        }
      ]
    })
  ]
})
export class LabelModule { }

