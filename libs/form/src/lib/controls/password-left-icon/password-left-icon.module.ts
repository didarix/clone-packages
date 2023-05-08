import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { PasswordLeftIconComponent } from './password-left-icon/password-left-icon.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PasswordLeftIconComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.passwordLeftIcon,
          component: PasswordLeftIconComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class PasswordLeftIconModule {}
