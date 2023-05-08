export interface ITableOptions {
  pageSize?: number;
  pagers?: number[];
  totalCount?: number;
  pagesCount?: number;
  pageNumber?: number;
  searchKey?: string;
  addCheckBox?: boolean;
  showAddBtn?: boolean;
  isServerSide?: boolean;
  sticky?: boolean;
  loading?: boolean;
  filter?: boolean;
  paginator?: boolean;
  showPaginatorRight?: boolean;
  showPaginatorLeft?: boolean;
  showSort?: boolean;
  sortMode?: string;
  selectionMode?: string;
  resizableColumns?: boolean;
  rows?: number;
  leftIcon?: string;
  rightIcon?: string;
  showCurrentPageReport?: boolean;
  showProgrammaticControl?: boolean;
  scrollbar?: boolean;
  scrollHeight?: string;
  edit?: boolean;
  requestType?: ERequestTypes;
  showFilterResults?: boolean;
}

export enum ERequestTypes {
  post = 'POST',
  get = 'GET',
}
