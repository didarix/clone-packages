import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
})
export class RadioButtonsComponent extends FieldType {
  onSelectItem(value) {
    this.formControl.setValue(value);
  }
}
