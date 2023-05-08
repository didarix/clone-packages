import { Component, OnInit } from '@angular/core';
import { FieldType, FieldTypeConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { HttpService } from '@youxel/core';
import { Observable, of, map } from 'rxjs';
import { IAutoComplete } from '../auto-complete.interface';

interface IAutoCompleteConfig extends IAutoComplete, FormlyTemplateOptions { };

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent extends FieldType<FieldTypeConfig> implements OnInit {

  override to!: IAutoCompleteConfig;

  suggestions!: Observable<string[] | any[]>;
  baseSuggestions!: Observable<string[] | any[]>;

  labelPropertyName: string | null = '';

  constructor(private http: HttpService) {
    super();
  }

  ngOnInit(): void {
    this.baseSuggestions = Array.isArray(this.to.options) ? of(this.to.options) : this.to.options as Observable<any[]>;
    this.suggestions = this.baseSuggestions;
    this.labelPropertyName = JSON.parse(JSON.stringify(this.to.labelPropertyName));
  }

  /**
   * 
   * @param event 
   * @description handle the search logic for the suggestions options
   */
  search(event: { query: string; }) {
    this.baseSuggestions.pipe(map(options => {
      const newOptions = this.filterClientSide(options, event.query);

      if (this.to.APIConfig) return this.suggestions = this.filterServerSide(event.query);
      if (newOptions.length) return this.suggestions = of(newOptions);

      return this.suggestions = of([]);
    })).subscribe();
  }

  /**
   * 
   * @param event 
   * @description handle on select event emitter
   */
  onSelect(event: any) {
    this.to.onSelect ? this.to.onSelect(event) : null;
  }

  /**
   * 
   * @param event 
   * @description handle on unselect event emitter
   */
  onUnselect(event: any) {
    this.to.onUnselect ? this.to.onUnselect(event) : null;
  }

  /**
   * 
   * @param event 
   * @description handle on clear event emitter
   */
  onClear(event: any) {
    this.to.onClear ? this.to.onClear(event) : null;
  }

  /**
   * 
   * @param event 
   * @description handle on lazy load event emitter
   */
  onLazyLoad(event: any) {
    this.to.onLazyLoad ? this.to.onLazyLoad(event) : null;
  }

  /**
   * 
   * @param option each option of the options
   * @param query search value
   * @descriptions search in the local options array based on entered value
   * @returns filtered options
   */
  private filterClientSide(options: any[], query: string) {
    return options.filter(option => {
      if (typeof option === 'object' && this.labelPropertyName) {
        return option[this.labelPropertyName].toLowerCase().includes(query);
      }

      this.labelPropertyName = null; // reset the labelPropertyName value to render the options well, incase the suggestions type is `string[]`.
      return option.toLowerCase().includes(query);
    });
  }

  /**
   * 
   * @param query search value
   * @descriptions search in the server options array based on entered value
   * @returns filtered options
   */
  private filterServerSide(query: string) {
    this.labelPropertyName = JSON.parse(JSON.stringify(this.to.labelPropertyName));
    const APIConfig = this.to.APIConfig;
    const params = APIConfig?.paramsPropertyName ? { [APIConfig?.paramsPropertyName as string]: query } : null;

    switch (APIConfig?.type) {
      case 'get':
        return this.http.get(APIConfig?.URL, { params: { ...params ?? {}, ...APIConfig?.params ?? {} } }).pipe(map((data => this.getDataFromResponse(data))));
      case 'post':
        const body = APIConfig?.bodyPropertyName ? { [APIConfig?.bodyPropertyName as string]: query } : null;

        return this.http.post(
          APIConfig?.URL,
          { ...body ?? {} },
          { params: { ...params ?? {}, ...APIConfig?.params ?? {} } }
        ).pipe(map((data => this.getDataFromResponse(data))));;
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
    const nestedProperties: string[] = (this.to.APIConfig?.responseProperty as string).split('.');
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
