import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouxelCoreModule } from '@youxel/core';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { MultiSelectWithSearchComponent } from './multi-select-with-search/multi-select-with-search.component';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [MultiSelectWithSearchComponent],
  imports: [
    CommonModule,
    YouxelCoreModule,
    SharedModule,
    WrapperFormlyFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: InputFormlyTypes.multiSelectWithSearch,
          component: MultiSelectWithSearchComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormlySelectModule,
  ],
})
export class MultiSelectWithSearchModule {}
