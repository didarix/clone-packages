import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import {
  DateControl,
  Dropdown,
  IAutoComplete,
  Toggle,
  WrapperFomlyField,
  IDatePicker,
} from './controls';
import { ILinkField } from './controls/interfaces/link-interface';
import { ILabelField } from './controls/interfaces/label-interface';
import { IRangeTime } from './enums/time-range.enum';

export interface FieldConfig extends FormlyFieldConfig {
  templateOptions?: ToFormly;
  fieldGroup?: FieldConfig[];
  fieldArray?: FieldConfig;
}

export interface ToFormly extends ILinkField,ILabelField, FormlyTemplateOptions {
  toggle?: Toggle;
  fieldConfig?: WrapperFomlyField;
  date?: DateControl;
  rangeTime?: IRangeTime;
}
