import { TemplateRef } from "@angular/core";

export interface IAutoComplete {
  labelPropertyName?: string | null;
  itemTemplate?: TemplateRef<any>;
  selectedItemTemplate?: TemplateRef<any>;
  multiple?: boolean;
  dropdownIcon?: string;
  dropdownMode?: string; // default value is `current` ... `blank` is the another value
  autofocus?: boolean;
  forceSelection?: boolean;
  style?: string;
  styleClass?: string;
  inputStyle?: string;
  inputStyleClass?: string;
  panelStyle?: string;
  panelStyleClass?: string;
  optionGroupLabel?: string; // default value is `label`
  group?: boolean; // default value is false
  optionGroupChildren?: string; // default value is `items`
  inputType?: string; // default value is `text`;
  emptyMessage?: string;
  showEmptyMessage?: boolean;
  showTransitionOptions?: string;
  hideTransitionOptions?: string;
  onSelect: (event: any) => {},
  onUnselect: (event: any) => {},
  onClear: (event: any) => {},
  onLazyLoad: (event: any) => {},
  APIConfig?: {
    type: 'post' | 'get';
    URL: string;
    responseProperty?: string; // you can assign nested properties by this way: result.data
    paramsPropertyName?: string; // which is the property to send it via params with the input value
    bodyPropertyName?: string; // which is the property to send it via body with the input value
    params?: any; // incase the user wants to add additional params properties with the default property
    body?: any; // incase the user wants to add additional body properties with the default property
  };
  }