import { HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logger, StorageService } from '../@services';
import { LanguageService } from '../@services/translation/language.service';

@Injectable({
  providedIn: 'root',
})
export class RequestHeadersService {
  head: HttpHeaders;

  private _HEADERS: any;

  get token(): string {
    return this.storage.getToken();
  }

  get lang(): string {
    return this.storage.getLang();
  }

  get headers() {
    this._HEADERS.Authorization = `Bearer ${this.token}`;
    this._HEADERS.LanguageCode = this.lang;
    return this._HEADERS;
  }

  set headers(value) {
    const oldHeaders = this._HEADERS ?? {};
    const newValue = value ?? {};
    this._HEADERS = { ...oldHeaders, ...newValue };
  }

  constructor(private storage: StorageService) {
    this.defaultHeaders();
  }

  private defaultHeaders() {
    if (!this._HEADERS)
      this.headers = {
        Authorization: `Bearer ${this.token}`,
        LanguageCode: this.lang,
      };
  }
}
