import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getValidationList(field) {
    if (field.validations) {
      if (field.validations.length > 0) {
        const validList = [];
        field.validations.forEach(valid => {
          let validation;
          switch (valid.name) {
            case 'required':
            case "dateRangeFrom-required":
            case "dateRangeTo-required":
            case "dateFrom-required":
            case "dateTo-required":
              validation = Validators.required;
              break;

            case 'pattern':
              validation = Validators.pattern(valid.value);
              break;

            case 'minlength':
              validation = Validators.minLength(valid.value);
              break;

            case 'maxlength':
              validation = Validators.maxLength(valid.value);
              break;

            default:
              break;
          }
          validList.push(validation);
        });
        return validList;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  /**
   * `getControlByName()` to get control from form controls by name
   * @param name 
   * @param formControls 
   */
  getControlByName(name, formControls) {
    return formControls.find(control => control.name === name)
  }

}
