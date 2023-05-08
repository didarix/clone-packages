import { IAutocompleteField } from '../../interfaces/auto-complete-interface';

export interface WrapperFomlyField extends IAutocompleteField {
  leftIcon?: string;
  rightIcon?: string;
  labelIcon?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  containerControlClassName?: string;
  errorClassName?: string;
  controlClassName?: string;
  showValueUnderDropdown?: boolean;
}
