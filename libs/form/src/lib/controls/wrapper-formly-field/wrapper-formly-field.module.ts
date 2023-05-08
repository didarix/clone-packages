import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperFormFieldComponent } from './formly-wrapper-form-field/formly-wrapper-form-field.component';
import { FormlyValidationMessage } from './formly-validation-message/formly-validation-message.component';
import { YouxelCoreModule } from '@youxel/core';
import { ValueUnderDropdownComponent } from './value-under-dropdown/value-under-dropdown.component';
import { SharedModule } from '../../shared/shared.module';

// TODO: add multiple wrapper for each type and each feature
@NgModule({
  declarations: [
    FormlyWrapperFormFieldComponent,
    FormlyValidationMessage,
    ValueUnderDropdownComponent,
  ],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormlyWrapperFormFieldComponent,
        },
      ],
    }),
  ],
})
export class WrapperFormlyFieldModule {}
