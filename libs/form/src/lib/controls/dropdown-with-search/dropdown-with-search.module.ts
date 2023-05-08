import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownWithSearchComponent } from './dropdown-with-search/dropdown-with-search.component';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DropdownWithSearchComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.dropDownWithSearch,
          component: DropdownWithSearchComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormlySelectModule,
  ],
})
export class DropdownWithSearchModule {}
