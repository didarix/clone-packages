export type View = 'date' | 'month' | 'year';
export type DateType = 'datepicker' | 'daterangepicker' | 'datetimepicker' | 'datetimerangepicker';
export type RangeType = 'days' | 'hours';

interface IDatePickerTranslation {
  dayNames:        string[];
  dayNamesShort:   string[];
  dayNamesMin:     string[];
  monthNames:      string[];
  monthNamesShort: string[];
  today:           string;
  weekHeader:      string;
}

export interface IDatePicker {
  dateType?: DateType;
  minDate?: string | Date;
  maxDate?: string | Date;
  rangeType?: RangeType;
  daysCountHint?: string;
  hoursCountHint?: string;
  view?: View;
  icon?: string;
  isMaxDateCalcFromStartDateValue?: boolean;
  validations?: any[];
  translation: IDatePickerTranslation;
}