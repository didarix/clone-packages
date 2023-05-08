import { NgModule } from '@angular/core';
import { YouxelCoreModule } from '@youxel/core';
// import { YouxelCoreModule } from 'dist/libs/core/youxel-core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password/password.component';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    TranslateModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.password,
          component: PasswordComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PasswordModule {}
