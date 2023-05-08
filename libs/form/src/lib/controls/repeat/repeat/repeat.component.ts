import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-repeat',
  template: `
    <div class="repeat-container">
      <form formArray>
        <div
          *ngFor="let item of field.fieldGroup; let i = index"
          class="sub-form my-3"
        >
          <formly-field [field]="item"></formly-field>
          <div class="d-flex">
            <button
              *ngIf="field.fieldGroup.length > 1"
              class="btn btn-danger py-2 px-3 mx-2"
              type="button"
              (click)="remove(i)"
            >
              {{ to.deleteText }}
            </button>

            <button
              class="btn-add py-2 px-3 mx-2"
              type="button"
              (click)="add()"
            >
              {{ to.addText }}
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
      <formly-validation-message [field]="field"></formly-validation-message>
    </div> -->
  `,
  styleUrls: ['./repeat.component.scss'],
})
export class RepeatComponent extends FieldArrayType implements OnInit {
  /***
   * @description get formArray control by key
   */
  get formArray() {
    return this.form.get(`${this.field.key}`) as FormArray;
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.patchFormArrayData();
  }

  /**
   * @description
   * patch value if the defaultValue to the array if key not = 0
   */
  patchFormArrayData() {
    const defaultValue = this.field.defaultValue;

    for (const key in defaultValue) +key && this.add();

    this.formArray.patchValue(defaultValue);
  }
}
