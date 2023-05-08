import { Injectable } from '@angular/core';
import { HttpService, LanguageService, ToastService } from '@youxel/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ITableOptions } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class YxlTableService {
  public tableData: any[] = [];
  public loading: boolean;
  sortOrder: string;
  sort: string;
  colId: string;
  public search$: BehaviorSubject<{}> = new BehaviorSubject({});
  public pageOptions: ITableOptions = {
    totalCount: 0,
    pagesCount: 0,
    pageNumber: 0,
    pageSize: 0,
  };

  constructor(
    private http: HttpService,
    private toaster: ToastService,
    private lang: LanguageService
  ) {}

  getAllByGet({
    url,
    pageNumber,
    sortOrder,
    sort,
    colId,
  }: IGetTableData): Observable<any> {
    this.loading = true;
    const pageSize = this.pageOptions.pageSize;
    sortOrder = sortOrder ?? this.sortOrder;
    sort = sort ?? this.sort;
    colId = colId ?? this.colId;

    return this.http
      .get(
        `${url}?PageNumber=${pageNumber}&PageSize=${pageSize}&colId=${colId}&sort=${sort}`
      )
      .pipe(
        map(({ result }) => {
          this.tableData = result.data;
          this.pageOptions.totalCount = result.totalCount;
          this.pageOptions.pagesCount = result.pagesCount;
          this.loading = false;

          return result;
        }),
        take(1)
      );
    // .subscribe();
  }

  getAllByPost({
    url,
    initialFilter,
    pageNumber,
    filter,
    orderByValue,
  }: IGetTableData): Observable<any> {
    this.loading = true;
    const pageSize = this.pageOptions.pageSize;
    filter = { ...filter, ...initialFilter, ...this.search$.value };
    if (orderByValue[0].colId == undefined) {
      orderByValue = [];
    }
    const data = {
      pageNumber,
      pageSize,
      filter,
      orderByValue,
    };

    return this.http.post(url, data).pipe(
      map(({ result }) => {
        this.tableData = result.data;
        this.pageOptions.totalCount = result.totalCount;
        this.pageOptions.pagesCount = result.pagesCount;
        this.loading = false;

        return result;
      }),
      take(1)
    );
    // .subscribe();
  }

  changeStatus({ url, id }) {
    return this.http.put(`${url}/${id}`).pipe(
      map((resp) => {
        const message = this.lang.translateTs('TOASTER.SUCCESS_MESSAGE');
        const title = this.lang.translateTs('TOASTER.SUCCESS');
        if (resp.success) {
          this.toaster.show({ message, title });
          return resp.result.data;
        }
      })
    );
  }

  deleteItem({ url, id }) {
    this.loading = true;
    return this.http.delete(url, id).pipe(
      take(1),
      map((resp) => {
        const message = this.lang.translateTs('GENERAL.DELETE_MESSAGE_SUCCESS');
        const title = this.lang.translateTs('TOASTER.SUCCESS');
        if (resp.success) this.toaster.show({ message, title });
        this.loading = false;
      })
    );
  }

  initTableData() {
    this.sortOrder = undefined;
    this.sort = undefined;
    this.colId = undefined;
    this.tableData = [];
    this.search$.next({});
    this.pageOptions = {
      totalCount: 0,
      pageNumber: 1,
      pagesCount: 0,
      pageSize: 10,
      paginator: true,
    };
  }
}

export interface IGetTableData {
  url: string;
  sortOrder?: string;
  pageNumber?: number;
  orderByValue?: any[];
  filter?: any;
  initialFilter?: any;
  sort?: any;
  colId?: any;
}
