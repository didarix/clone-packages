import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-select-button',
  template: `<p-selectButton
    multiple="true"
    [options]="to.options"
    [formControl]="formControl"
  ></p-selectButton>`,
  styleUrls: ['./select-button.component.scss'],
})
export class SelectButtonComponent extends FieldType implements OnInit {
  ngOnInit(): void {}
}
