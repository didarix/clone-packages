import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { TranslateModule } from '@ngx-translate/core';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { SharedModule } from '../../shared/shared.module';
import { InputFormlyTypes } from '../../enums';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    YouxelCoreModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    WrapperFormlyFieldModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.dropdown,
          wrappers: ['form-field'],
          component: DropdownComponent
        }
      ]
    }),
  ]
})
export class DropdownModule { }
