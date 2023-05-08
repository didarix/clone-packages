import { Component, DoCheck } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { EPeriodTime, ERangeTime } from '../range-time';

@Component({
  selector: 'app-range-time',
  template: `
    <p-overlayPanel #op (onHide)="setControlValue()">
      <ng-template pTemplate>
        <div class="popupContainer">
          <div class="row row-container">
            <span class="fromTo">{{ 'EVENTS.FROM' }}</span>
            <input
              type="number"
              class="inputHour"
              [placeholder]="'EVENTS.HOURS'"
              [min]="00"
              [max]="12"
              [ngModel]="rangeTimeFrom.hour | hourFormat"
              (change)="onChangeHours(ERangeTime.from, $event.target.value)"
            />:
            <input
              class="inputHour"
              type="number"
              [placeholder]="'EVENTS.MINUTES'"
              [min]="00"
              [max]="59"
              [ngModel]="rangeTimeFrom.minute | hourFormat"
              (change)="onChangeMinutes(ERangeTime.from, $event.target.value)"
            />
            <div
              class="period"
              [ngClass]="{
                selectedPeriod: rangeTimeFrom.period === EPeriodTime.AM
              }"
              (click)="selectFromPeriod(EPeriodTime.AM)"
            >
              {{ 'EVENTS.AM' }}
            </div>
            <div
              class="period"
              [ngClass]="{
                selectedPeriod: rangeTimeFrom.period === EPeriodTime.PM
              }"
              (click)="selectFromPeriod(EPeriodTime.PM)"
            >
              {{ 'EVENTS.PM' }}
            </div>
          </div>
          <div class="row row-container">
            <span class="fromTo">{{ 'EVENTS.TO' }} </span>
            <input
              type="number"
              class="inputHour"
              [min]="00"
              [max]="12"
              [ngModel]="rangeTimeTo.hour | hourFormat"
              (change)="onChangeHours(ERangeTime.to, $event.target.value)"
              [placeholder]="'EVENTS.HOURS'"
            />:
            <input
              class="inputHour"
              type="number"
              [placeholder]="'EVENTS.MINUTES'"
              [min]="00"
              [max]="59"
              [ngModel]="rangeTimeTo.minute | hourFormat"
              (change)="onChangeMinutes(ERangeTime.to, $event.target.value)"
            />
            <div
              class="period"
              [ngClass]="{
                selectedPeriod: rangeTimeTo.period === EPeriodTime.AM
              }"
              (click)="selectToPeriod(EPeriodTime.AM)"
            >
              {{ 'EVENTS.AM' }}
            </div>
            <div
              class="period"
              [ngClass]="{
                selectedPeriod: rangeTimeTo.period === EPeriodTime.PM
              }"
              (click)="selectToPeriod(EPeriodTime.PM)"
            >
              {{ 'EVENTS.PM' }}
            </div>
          </div>
        </div>
      </ng-template>
    </p-overlayPanel>
    <div class="row toggle-container">
      <div
        class="time"
        [ngClass]="{ selected: selected }"
        (click)="togglePopup($event, op)"
      >
        <span>{{
          (rangeTimeFrom.hour | hourFormat) +
            ':' +
            (rangeTimeFrom.minute | hourFormat) +
            ' ' +
            rangeTimeFrom.period
        }}</span>
      </div>
      <div
        class="time"
        [ngClass]="{ selected: selected }"
        (click)="togglePopup($event, op)"
      >
        <span>{{
          (rangeTimeTo.hour | hourFormat) +
            ':' +
            (rangeTimeTo.minute | hourFormat) +
            ' ' +
            rangeTimeTo.period
        }}</span>
      </div>
    </div>
  `,
  styles: [
    `
      .popupContainer {
        width: 300px;
        padding: 10px;
        border-radius: 15px;
      }
      .fromTo {
        width: 20px;
      }
      .row-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 5px;
        color: black;
        font-weight: bold;
        font-family: unset !important;
      }
      .selectedPeriod {
        padding: 5px;
        background-color: #1650ed;
        color: white;
      }
      .inputHour {
        width: 98px;
        height: 39px;
        flex-grow: 0;
        padding: 5.5px 9.5px 5.5px 7.5px;
        border: solid 1px gray;
        border-radius: 5px;
      }
      .unSelectedPeriod {
        color: black;
      }
      .toggle-container {
        justify-content: space-around;
        margin-top: 2.7rem;
      }
      .time {
        background-color: transparent;
        border: 1px solid #b0b9be;
        border-radius: 8px;
        padding: 8px 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
      }
      .selected {
        border: 1px solid #1650ed;
      }
      .period {
        cursor: pointer;
      }
    `,
  ],
})
export class RangeTimeComponent extends FieldType {
  get fieldFormControl() {
    return this.form.get(`${this.field.key}`);
  }
  get rangeTimeFrom() {
    return this.to['rangeTime']?.from;
  }
  get rangeTimeTo() {
    return this.to['rangeTime']?.to;
  }
  get EPeriodTime(): typeof EPeriodTime {
    return EPeriodTime;
  }
  get ERangeTime(): typeof ERangeTime {
    return ERangeTime;
  }
  selected: boolean = false;

  togglePopup(event, op) {
    this.selected = true;
    op.toggle(event);
  }
  selectToPeriod(period: typeof EPeriodTime) {
    this.to['rangeTime'].to.period = period;
  }
  selectFromPeriod(period: typeof EPeriodTime) {
    this.to['rangeTime'].from.period = period;
  }
  onChangeMinutes(type: ERangeTime, value) {
    if (type === ERangeTime.from) {
      this.to['rangeTime'].from.minute = value;
    } else {
      this.to['rangeTime'].to.minute = value;
    }
  }
  onChangeHours(type: ERangeTime, value) {
    if (type === ERangeTime.from) {
      this.to['rangeTime'].from.hour = value;
    } else {
      this.to['rangeTime'].to.hour = value;
    }
  }
  setControlValue() {
    this.selected = false;
    this.fieldFormControl.setValue({
      from: this.rangeTimeFrom,
      to: this.rangeTimeTo,
    });
  }
}
