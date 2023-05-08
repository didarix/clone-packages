import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperFormlyFieldModule } from '../wrapper-formly-field/wrapper-formly-field.module';
import { FormlyModule } from '@ngx-formly/core';
import { InputFormlyTypes } from '../../enums/form.enum';
import { LinkComponent } from './link/link.component';



@NgModule({
    declarations: [
        LinkComponent
    ],
    imports: [
        CommonModule,
        WrapperFormlyFieldModule,
        FormlyModule.forChild({
            types: [
                {
                    name: InputFormlyTypes.link,
                    component: LinkComponent,
                    wrappers: ['form-field']
                }
            ]
        })
    ]
})
export class LinkModule { }
