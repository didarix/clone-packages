import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  selector: 'app-chips',
  styleUrls: ['./chips.component.scss'],
  template:`<p-chips [formControl]="formControl"> </p-chips>`
})
export class ChipsComponent extends FieldType implements OnInit {


  ngOnInit(): void {
  }

}
