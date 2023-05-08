import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
//import { environment } from '../environments/environment';

@Component({
  selector: 'app-youxel-form',
  template: `
    <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
    <div *ngIf="debug">
      <app-debug-formly [model]="model" [fields]="fields"></app-debug-formly>
    </div>
  `,
})
export class YouxelFormComponent implements OnInit {
  @Input() form: any;
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() model: { [key: string]: any } = {};
  @Input() debug: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // if (environment.production) this.debug = false;
    // else this.debug = this.debug;
  }
}
