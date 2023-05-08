import { TemplateRef } from "@angular/core";

export type Dropdown = {
    width?: number; // width of the dropdown
    labelPropertyName?: string; // ame of the label property of an option. default value is `name`
    selectedItemTemplate?: TemplateRef<any>; // template reference for dropdown selected option
    itemTemplate?: TemplateRef<any>; // template reference for dropdown option
    groupTemplate?: TemplateRef<any>; // template reference for group option
    optionValue?: string; // name of the value property of an option.
    dropdownIcon?: string;
    readonly?: boolean;
    dataKey?: string;
    autofocus?: boolean;
    emptyMessage?: string;
    showClear?: boolean;
    showTransitionOptions?: string;
    hideTransitionOptions?: string;

    group?: boolean;
    optionGroupLabel?: string;
    optionGroupChildren?: string;

    style?: string;
    panelStyle?: string;
    styleClass?: string;
    panelStyleClass?: string;

    filter?: boolean;
    filterValue?: string;
    filterBy?: string;
    filterMatchMode?: string;
    filterPlaceholder?: string;
    filterLocale?: string;
    emptyFilterMessage?: string;
    resetFilterOnHide?: boolean;
    autofocusFilter?: boolean;

    tooltip?: any;
    tooltipStyleClass?: string;
    tooltipPosition?: 'right' | 'left' | 'top' | 'bottom';
    tooltipPositionStyle?: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky' | 'inherit' | 'initial' | 'unset';

    APIConfig?: {
        type: 'post' | 'get';
        URL: string;
        responseProperty?: string; // you can assign nested properties by this way: result.data
        params?: any; // incase the user wants to add additional params properties with the default property
        body?: any; // incase the user wants to add additional body properties with the default property
    };

    onChange: (event: any) => {};
    onFilter: (event: any) => {};
    onClear: (event: any) => {};
};
