import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { HttpService } from '@youxel/core';
import { map, Observable, of } from 'rxjs';
import { FieldConfig } from '../../../field-config';

type DropdownSettings = FieldConfig['templateOptions'];

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  /**
   * TODO: will be refactored later
   */
  override to!: DropdownSettings | any;

  /**
   * @description dropdown options.
   */
  dropdownOptions!: Observable<any[]>;

  constructor(private http: HttpService) {
    super();
  }

  ngOnInit() {
    // set default dropdownOptions property value
    if (!this.to.options && this.to.APIConfig) {
      this.dropdownOptions = this.callServerSideAPI();
    } else {
      this.dropdownOptions = Array.isArray(this.to.options)
        ? of(this.to.options)
        : (this.to.options as Observable<any[]>);
    }
  }

  onSelectItem(selectedOption: { value: any }) {
    this.form.get(this.key as string)?.setValue(selectedOption.value);
    this.to.onChange ? this.to.onChange(selectedOption) : '';
  }

  onFilter(event: any) {
    this.to.onFilter ? this.to.onFilter(event) : '';
  }

  onClear(event: any) {
    this.to.onClear ? this.to.onClear(event) : '';
  }

  /**
   *
   * @param query search value
   * @descriptions search in the server options array based on entered value
   * @returns filtered options
   */
  private callServerSideAPI() {
    const APIConfig = this.to.APIConfig;

    switch (APIConfig?.type) {
      case 'get':
        return this.http
          .get(APIConfig?.URL, { params: APIConfig.params })
          .pipe(map((data) => this.getDataFromResponse(data)));
      case 'post':
        return this.http
          .post(
            APIConfig?.URL,
            { ...(APIConfig?.body ?? {}) },
            { params: { ...(APIConfig?.params ?? {}) } }
          )
          .pipe(map((data) => this.getDataFromResponse(data)));
      default:
        return of([]);
    }
  }

  /**
   *
   * @param response API response
   * @returns the data based on nested properties
   */
  private getDataFromResponse(response: any): any {
    const nestedProperties: string[] = (
      this.to.APIConfig?.responseProperty as string
    ).split('.');
    let value = response;

    for (const prop of nestedProperties) {
      if (value[prop] == null) {
        return value;
      }

      value = value[prop];
    }

    return value;
  }
}
