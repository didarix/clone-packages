import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-value-under-dropdown',
  template: `
    <div class="underDropDownValue">
      <ul>
        <li *ngFor="let value of listOfValue; let i = index">
          <span>{{ value }}</span>
          <span
            *ngIf="!this.fieldControl.disabled"
            class="removeVal"
            (click)="remove(i)"
          >
            <i class="pi pi-times"></i>
          </span>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .underDropDownValue {
        margin-top: 0.5rem;
      }

      .underDropDownValue ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .underDropDownValue ul li {
        display: flex;
        align-items: center;
        border: 1px solid #3f1e6d;
        border-radius: 7px;
        justify-content: space-between;
        padding: 0.2rem 0.5rem;
        margin-inline-end: 0.5rem;
        margin-bottom: 0.3rem;
      }

      .underDropDownValue ul li span {
        font-size: 1.2rem;
      }

      .underDropDownValue ul li span.removeVal {
        width: 15px;
        height: 15px;
        background-color: rgba(63, 30, 109, 0.2);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-inline-start: 0.7rem;
        border-radius: 50%;
        padding: 0.3rem;
        cursor: pointer;
      }

      .underDropDownValue ul li span .pi {
        font-size: 1rem;
      }

      .underDropDownValue ul li button {
        margin-inline-start: 0.5rem;
      }
    `,
  ],
})
export class ValueUnderDropdownComponent implements OnInit {
  @Input() fieldControl: any = FormControl;
  listOfValue: any[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log();
    this.fieldControl.valueChanges.subscribe((res: any) => {
      if (typeof res === 'string') this.listOfValue = [res];
      else this.listOfValue = res;
    });
  }

  remove(itemIndex: number) {
    this.listOfValue.splice(itemIndex, 1);
    this.fieldControl.setValue(this.listOfValue);
  }
}
