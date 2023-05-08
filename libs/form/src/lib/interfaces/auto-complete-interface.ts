import { BehaviorSubject } from 'rxjs';
import { EAutoCompleteResultViewType } from '../enums';

export interface IAutocompleteField {
  showSearchResult?: boolean;
  searchResultValue?: BehaviorSubject<any>;
  autoCompleteClosed?: BehaviorSubject<any>;
  notFoundText?: string;
  resultViewType?: EAutoCompleteResultViewType.Default;
  localizedItems?: IAutoCompleteLocalizedItems;
}

export interface IAutoCompleteLocalizedItems {
  ResultsFound?: string;
  BeforeSearchHint?: string;
}
