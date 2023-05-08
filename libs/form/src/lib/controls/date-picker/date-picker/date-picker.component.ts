import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { IDatePicker, DateType } from '../datepicker.interface';
import { parse, format, add, differenceInDays, differenceInBusinessDays, isBefore, differenceInHours } from 'date-fns';
import { NgModel } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { LanguageService } from '@youxel/core';

interface DatePickerSettings extends IDatePicker, FormlyTemplateOptions { }
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent extends FieldType<FieldTypeConfig> implements OnInit {

  override key!: string;
  override to!: DatePickerSettings;

  dateFormat = 'dd/MM/yyyy';
  dateType: DateType = 'datepicker';
  minDate: string | Date = '';
  maxDate: string | Date = '';
  startDateValue: string | Date = '';
  endDateValue: string | Date | undefined = '';

  defaultTimeValue = '12:00 AM';

  startTimeValue = this.defaultTimeValue;
  endTimeValue = this.defaultTimeValue;

  private fullDateFormat = 'yyyy-MM-dd\'T\'HH:mm:ssxxx';

  private get _minDate() { return this.isIstanceOfDate(this.to.minDate) ? this.to.minDate : this.parseDate(this.to.minDate as string); }
  private get _maxDate() { return this.isIstanceOfDate(this.to.maxDate) ? this.to.maxDate : this.parseDate(this.to.maxDate as string); }
  get showIcon() { return this.to.icon ? true : false; }
  get optionsClass() {
    return {
      'with-time': this.dateType === 'datetimepicker' || this.dateType === 'datetimerangepicker',
      'date-range': this.dateType.includes('range')
    };
  }
  get hoursCount() {
    if (this.startDateValue && this.endDateValue) return differenceInHours(this.endDateValue as Date, this.startDateValue as Date);

    return 0;
  }
  get daysCount() {
    if (this.startDateValue && this.endDateValue) return differenceInDays(this.endDateValue as Date, this.startDateValue as Date);

    return 0;
  }
  get businessDaysCount() {
    if (this.startDateValue && this.endDateValue) return differenceInBusinessDays(this.endDateValue as Date, this.startDateValue as Date);

    return 0;
  }

  get isEndDateRequired() {
    if (this.to.validations?.length) return this.to.validations.some(validation => validation.name === 'dateTo-required');
    if (!this.endDateValue) return true;

    return false;
  }

  @ViewChild('endDate') endDateControl!: NgModel;

  constructor(private config: PrimeNGConfig, private translate: LanguageService) {
    super();
  }

  ngOnInit(): void {
    this.handleTranslation();
    if (this.to.dateType) this.dateType = this.to.dateType;
    this.setDefaultDateValue();
    this.minDate = (this._minDate as string | Date);
    this.maxDate = (this._maxDate as string | Date);
  }

  /**
   * 
   * @description set the default date value based on given form control value.
   */
  setDefaultDateValue() {
    const dateValue: Date | string | string[] = this.form.get(this.key)?.value;
    let dateValueAsDateFormat: Date[];

    if (!dateValue) { this.form.get(this.key)?.reset(); return; } // empty value

    if (Array.isArray(dateValue)) { // in case range
      if (dateValue.some(date => date === '') || !dateValue.length) { this.form.get(this.key)?.reset(); return; } // empty value

      if (dateValue.every(date => this.isIstanceOfDate(date))) { // if the date is istanceOf Date format
        this.form.get(this.key)?.setValue(dateValue.map(eachDate => this.convertDateToFullDateFormat(eachDate as unknown as Date)));
        return;
      }

      // else
      dateValueAsDateFormat = dateValue.map(date => this.parseDate(date));
      this.startDateValue = dateValueAsDateFormat[0];

      // set the time with current time in case datepicker type. else, set the default time of the start date value.
      this.startTimeValue = this.dateType === 'datepicker' ? format(new Date(), 'p') : format(this.startDateValue, 'p');

      if (dateValueAsDateFormat[1]) { // end date
        this.endDateValue = dateValueAsDateFormat[1];

        // set the time with current time in case datepicker type. else, set the default time of the end date value.
        this.endTimeValue = this.dateType === 'daterangepicker' ? format(new Date(), 'p') : format(this.endDateValue, 'p');
        this.form.get(this.key)?.setValue([this.convertDateToFullDateFormat(this.startDateValue), this.convertDateToFullDateFormat(this.endDateValue)]);
        return;
      }

      this.form.get(this.key)?.setValue(this.convertDateToFullDateFormat(this.startDateValue)); // start date;
      return;
    } else { // in case single
      if (this.isIstanceOfDate(dateValue)) { // if the date is istanceOf Date format
        this.form.get(this.key)?.setValue(this.convertDateToFullDateFormat(dateValue as Date));
        this.startTimeValue = format(dateValue as Date, 'p');
        return;
      }

      // else
      this.startTimeValue = format(this.parseDate(dateValue as string), 'p');
      this.form.get(this.key)?.setValue(this.convertDateToFullDateFormat(this.parseDate(dateValue as string)));
    }
  }

  /**
   * 
   * @description set the date-picker translation based on translation property in the template options atherwise Arabic translation
   */
  handleTranslation() {
    const arabicTranslation = {
      "dayNames": ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
      "dayNamesShort": ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
      "dayNamesMin": ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
      "monthNames": ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونية", "يوليو", "أغسطس", "سيبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      "monthNamesShort": ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونية", "يوليو", "أغسطس", "سيبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
      "today": "اليوم",
      "weekHeader": "رإ"
    };

    let translation = this.to.translation || arabicTranslation;
    if (!this.translate.isEnglish()) this.config.setTranslation(translation);
  }

  /**
   * 
   * @description update the date-picker value in case the `dateType` is `datepicker`.
   * @description update the date-picker value with start date value in case the `dateType` is `daterangepicker` || `datetimerangepicker`.
   *  and check if the start date is after the end date, then should reset the end date value.
   */
  updateStartDateValue() {
    if (this.dateType === 'daterangepicker' || this.dateType === 'datetimerangepicker') {
      this.resetEndDateValue();
    }

    this.setDateValue();
  }

  /**
   * 
   * @description update the date-picker value with end date value in case the `dateType` is `daterangepicker` || `datetimerangepicker`.
   */
  updateEndDateValue() {
    this.setDateValue();
  }

  /**
   * 
   * @description generate start date value based on start time value and hanle the start time minimum & maximum value.
   */
  getStartTime() {
    this.setDateValue();
    this.resetEndDateValue();
    this.handleMinEndTime();
  }

  /**
   * 
   * @description generate end date value based on end time value and hanle the end time minimum & maximum value.
   */
  getEndTime() {
    this.setDateValue();
    setTimeout(() => this.handleMinEndTime());
  }

  /**
   * @description set the date value with selected time to the form control in all cases.
   */
  private setDateValue() {
    const finalStartDateValue = this.formatDate(this.startDateValue as Date, this.startTimeValue),
      finalEndDateValue = this.endDateValue ? this.formatDate(this.endDateValue as Date, this.endTimeValue) : null,
      startDate = finalStartDateValue.withSelectedTimeFullDateFormat,
      endDate = finalEndDateValue?.withSelectedTimeFullDateFormat;

    this.startDateValue = finalStartDateValue.withSelectedTimeDateFormat;
    this.endDateValue = finalEndDateValue?.withSelectedTimeDateFormat;

    if (this.dateType === 'datepicker') this.form.get(this.key)?.setValue(finalStartDateValue.withSelectedTimeFullDateFormat);
    if (this.dateType === 'datetimepicker') this.form.get(this.key)?.setValue(finalStartDateValue.withSelectedTimeFullDateFormat);
    if (this.dateType === 'daterangepicker' || this.dateType === 'datetimerangepicker') this.form.get(this.key)?.setValue([startDate, endDate]);
  }

  /**
   * 
   * @description set the minimum time for the end time timepicker to the start time if the end time is bigger than the start time.
   */
  private handleMinEndTime() {
    const startTime = this.parseDate(this.startTimeValue, 'p'), // Date Format
      endTime = this.parseDate(this.endTimeValue, 'p'); // Date Format

    if (isBefore(endTime, startTime)) {
      this.endTimeValue = this.startTimeValue;
    }
  }

  /**
   * 
   * @description reset end date value if the start date in bigger than end date.
   */
  private resetEndDateValue() {
    if (this.startDateValue > (this.endDateValue as Date)) {
      this.endDateValue = undefined;
      this.endDateControl.control.markAsDirty();
      this.endDateControl.control.markAsTouched();
    }
  }

  /**
   * 
   * @param date typeof native Date format
   * @param time typeof string
   * @description format the given date with the specific given time
   * @returns `Object` of 4 properties with 4 different formats - `withSelectedTimeDateFormat`, `withSelectedTimeFullDateFormat`
   */
  private formatDate(date: Date, time: string) {
    const dateFormated = format(date, this.dateFormat), // 'dd/MM/yyyy'
      withSelectedTime = `${dateFormated} ${time}`, // 'dd/MM/yyyy p'
      withSelectedTimeDateFormat = this.parseDate(withSelectedTime, `${this.dateFormat} p`), // Date()
      withSelectedTimeFullDateFormat = this.convertDateToFullDateFormat(withSelectedTimeDateFormat); // 'yyyy-MM-dd\'T\'HH:mm:ssxxx'

    return {
      withSelectedTimeDateFormat,
      withSelectedTimeFullDateFormat
    };
  }

  /**
   * 
   * @param date typeof any
   * @description check if the given date is instanceof native Date format OR not!.
   * @returns `boolean`
   */
  private isIstanceOfDate(date: any) {
    return date instanceof Date && Object.prototype.toString.call(date) === '[object Date]';
  }

  /**
   * 
   * @param date typeof string
   * @param dateFormat typeof string
   * @description convert the given date based on given format to native Date format.
   * @returns native `Date` format
   */
  private parseDate(date: string, dateFormat?: string) {
    const dateFormats = ['dd/MM/yyyy p', 'dd/MM/yy', 'dd/MM/yy p', 'MM/dd/yyyy', 'MM/dd/yyyy p', 'MM/dd/yy', 'MM/dd/yy p',
      'yyyy/MM/dd', 'yyyy/MM/dd p', 'yy/MM/dd', 'yy/MM/dd p'];
    const validDateFormat = dateFormats.find(format => this.isValidDate(date, format));

    if (validDateFormat) return parse(date, validDateFormat, new Date());

    if (dateFormat) return parse(date, dateFormat, new Date());

    if (this.isValidDate(date, this.dateFormat)) return parse(date, this.dateFormat, new Date());

    if (this.isValidDate(date, this.fullDateFormat)) return parse(date, this.fullDateFormat, new Date());

    // incase type of it is number, so this is add days as min/max date.
    if (date && typeof +date === 'number' || typeof date === 'number') return add(new Date(), { days: +date });

    return parse(date, '', new Date()); // Unhandled case
  }

  /**
   * 
   * @param date typeof string
   * @param dateFormat typeof string
   * @description check if the given date is valid or not.
   * @returns `Boolean`
   */
  private isValidDate(date: string, dateFormat: string) {
    return parse(date, dateFormat, new Date()).toString() !== 'Invalid Date';
  }

  /**
   * 
   * @param date typeof native Date Format
   * @returns `string` the selected date with a full date format
   */
  private convertDateToFullDateFormat(date: Date) {
    return format(date, this.fullDateFormat);
  }
}
