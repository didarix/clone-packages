import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-check-box',
  template: `
    <input
      type="hidden"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
    <div class="customCheckBox">
      <label [for]="formControl.value.permissionId"
        >{{ formControl.value.permissionName }}
        <input
          type="checkbox"
          [id]="formControl.value.permissionId"
          [checked]="valCheckBox"
          [value]="valCheckBox"
          (change)="updateValue()"
        />
      </label>
    </div>
  `,
  styles: [
    `
      .customCheckBox {
        background-color: #fff;
        margin-bottom: 0.5rem;
        border-radius: 5px;
      }

      .customCheckBox:hover {
        background-color: #eee;
      }

      .customCheckBox label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.4rem;
      }
    `,
  ],
})
export class CustomCheckBoxComponent extends FieldType implements OnInit {
  valCheckBox: boolean;

  ngOnInit(): void {
    this.valCheckBox = this.formControl.value.canEdit;
  }

  updateValue() {
    this.valCheckBox = !this.valCheckBox;
    const value = this.formControl.value;
    value.canEdit = this.valCheckBox;
    value.canView = this.valCheckBox;
    this.formControl.setValue(value);
    this.formControl.markAsDirty();
  }
}
