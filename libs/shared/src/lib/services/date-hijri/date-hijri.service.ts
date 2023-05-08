import { Injectable } from '@angular/core';

import * as momentHijri from 'moment-hijri';
@Injectable({
  providedIn: 'root'
})
export class DateHijriService {

  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  constructor() { }

  calculateMin(min) {
    let date =  momentHijri(new Date(this.year, this.month, this.today.getDate())).locale('en');
    let subtract = momentHijri(date).subtract(min, 'iDate').locale('en');
    let day = momentHijri(subtract._d).locale('en').format('iD');
    let month = momentHijri(subtract._d).locale('en').format('iMM');
    let year = momentHijri(subtract._d).locale('en').format('iYYYY');
    let minDate = { year: +year, month: +month, day: +day }
    return minDate;
  }

  calculateMax(max) {
    let date = momentHijri(new Date(this.year, this.month, this.today.getDate())).locale('en');
    let add = momentHijri(date).add(max, 'iDate').locale('en');
    let day = momentHijri(add._d).locale('en').format('iD');
    let month = momentHijri(add._d).locale('en').format('iMM');
    let year = momentHijri(add._d).locale('en').format('iYYYY');
    let maxDate = { year: +year, month: +month, day: +day }
    return maxDate;
  }
}
