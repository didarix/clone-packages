import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.editor,
          component: EditorComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class EditorModule {}
