import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-accordion',
  template: `
    <p-accordion>
      <p-accordionTab *ngFor='let tab of field.fieldGroup; let i = index; let last = last;' [header]='tab.templateOptions.label'>
        <formly-field [field]='tab'></formly-field>
      </p-accordionTab>
    </p-accordion>
  `,
})
export class AccordionComponent extends FieldType implements OnInit {

  ngOnInit(): void {
  }

}
