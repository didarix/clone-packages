import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyTemplateOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent extends FieldType implements OnInit {
  ngOnInit() { 
  }

}
