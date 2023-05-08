import { FormControl, ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export class WhiteSpaceValidator {
  public static whiteSpaceValidator(control: FormControl): ValidationErrors {
    return !control.value || (control.value as string).indexOf(' ')
      ? null
      : { whiteSpace: true };
  }

  public static whiteSpaceValidatorMessage(err, field: FormlyFieldConfig) {
    return 'VALIDATION_GENERAL.NOT_VALID'
  }

}

export enum EWhiteSpace {
  WhiteSpace = 'whiteSpace'
}
