export interface ITranslatedItemsFromEndUser {
  actionColHeader?: string;
  modelHeaderText?: string;
  modelButtonsText?: IModelButtonsText;
  paginationTranslationTxt?: IPaginationTranslationTxt;
  modelDeleteActionName?: string;
  confirmationDeleteMsg?: string;
  filterKey?: IFilter;
}

export interface IPaginationTranslationTxt {
  showing?: string;
  off?: string;
}

export interface IModelButtonsText {
  cancel?: string;
  delete?: string;
}

export interface IFilter {
  resetAll?: string;
  results?: string;
}
