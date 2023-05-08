import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';
import { EAutoCompleteResultViewType } from '../../../enums';
import { IAutoCompleteLocalizedItems } from '../../../interfaces';

@Component({
  selector: 'app-dropdown-with-search',
  template: `
    <div class="dropdown-with-search-wrapper">
      <ng-select
        [formControl]="formControl"
        [formlyAttributes]="field"
        [items]="to.options | formlySelectOptions: field | async"
        [searchable]="true"
        [clearable]="true"
        bindLabel="label"
        bindValue="value"
        [placeholder]="to.placeholder"
        [ngClass]="[
          showError ? 'ng-invalid ng-dirty' : '',
          isSearchResult ? '' : 'empty-main-custom-class'
        ]"
        (search)="getSearchResult($event)"
        (close)="handleCloseDropDown()"
        (clear)="doClearSearchResult()"
        (open)="handleOpenDropDown()"
      >
        <ng-template ng-notfound-tmp let-searchTerm="searchTerm">
          <div class="ng-option empty-custom-class">
            {{ to?.notFoundText || 'No Results Found' }}
          </div>
        </ng-template>
      </ng-select>

      <ng-container
        *ngIf="
          to['showSearchResult'] &&
          (!to['resultViewType'] || to['resultViewType'] !== eViewType.Custom)
        "
      >
        <div *ngIf="isOpened">
          <div
            *ngIf="
              localSearchResults?.items?.length && localSearchResults?.term
            "
            class="search-result"
          >
            {{ localSearchResults?.items?.length }}
            {{ localizedItems.ResultsFound }} '{{ localSearchResults.term }}'
          </div>

          <div
            *ngIf="
              !localSearchResults?.items?.length && !localSearchResults?.term
            "
            class="search-hint"
          >
            {{ localizedItems.BeforeSearchHint }}
          </div>
        </div>
      </ng-container>

      <!-- Custom template Case -->
      <ng-container
        *ngIf="
          to['resultViewType'] && to['resultViewType'] === eViewType.Custom
        "
      >
        <ng-container [ngTemplateOutlet]="to['resultViewTemplate']">
        </ng-container>
      </ng-container>
    </div>
  `,
  styles: [
    `
      ::ng-deep .ng-select .ng-select-container {
        min-height: 3rem;
        min-width: 15rem;
        padding: 0 5px;
      }
    `,
  ],
})
export class DropdownWithSearchComponent extends FieldType implements OnInit {
  isOpened: boolean = false;
  isSearchResult: boolean = true;

  /**
   * localized items default values
   */
  localizedItems: IAutoCompleteLocalizedItems = {
    ResultsFound: 'Result Found',
    BeforeSearchHint: 'Search here by enter a keyword',
  };

  /**
   * result view typeo
   * default
   * custom => require a custom template from the user
   */
  eViewType = EAutoCompleteResultViewType;

  /**
   * on type we receive an event containing to property
   * term and items
   */
  localSearchResults: {
    term: string;
    items: [];
  };

  ngOnInit(): void {
    this.to['searchResultValue'] = new BehaviorSubject<any>({});

    this.to['autoCompleteClosed'] = new BehaviorSubject<boolean>(false);

    this.localizedItems = {
      ...this.localizedItems,
      ...this.to['localizedItems'],
    };
  }

  /**
   * @description `this method is firing when the search emit new value`
   * @param event that out from the search emitter
   */
  getSearchResult(event: any) {
    this.isSearchResult = event?.items.length ? true : false;
    this.localSearchResults = event;

    this.to['showSearchResult'] ? this.to['searchResultValue'].next(event) : '';
  }

  /**
   * on clear don't show search result
   */
  doClearSearchResult(): void {
    this.isSearchResult = true;
  }

  /**
   * fire on open dropdown control
   */
  handleOpenDropDown() {
    this.isOpened = true;
    this.to['autoCompleteClosed']
      ? this.to['autoCompleteClosed'].next(false)
      : '';
  }

  /**
   * fire on close dropdown control
   */
  handleCloseDropDown() {
    this.isOpened = false;
    this.to['autoCompleteClosed']
      ? this.to['autoCompleteClosed'].next(true)
      : '';

    this.to['searchResultValue'].next('');
  }
}
