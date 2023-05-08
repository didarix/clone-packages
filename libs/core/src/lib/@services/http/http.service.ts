import { CoreConfigService } from './../CoreConfig.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IYouxelEnvironment } from '../../interfaces/environment.interface';
// import APIURL from './env-url';

@Injectable({
  providedIn: 'root',
})

/**
 * Manipulate the HTTP requests for the whole app
 * handle the main POST, GET, UPDATE, DELETE methods
 */
export class HttpService {
  environemt: IYouxelEnvironment;

  private baseUrl;
  packageConfig: any;

  /**
   * @description Base backend URL
   *
   * @readonly
   * @type {string}
   */
  // get URL(): string {
  //   return this.baseUrl;
  // }

  get URL(): string {
    return this.environemt.baseUrl;
  }

  constructor(
    private http: HttpClient,
    private coreConfigService: CoreConfigService
  ) {
    this.environemt = this.coreConfigService.configuration.environment;
    this.baseUrl = this.environemt.baseUrl;
  }

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @param options - to add custom config for request header
   * @return Observable of response, comes from the end point
   */
  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(this.environemt.baseUrl + url, data, options);
  }

  /**
   * @description Post request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  postUrl(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }

  /**
   * @description Get request using angular httpClient module
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  get(url: string, data?: any): Observable<any> {
    return this.http.get(this.environemt.baseUrl + url, data);
  }

  /**
   * @description PUT request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  put(url: string, data?: any, options?: any): Observable<any> {
    return this.http.put(this.environemt.baseUrl + url, data, options);
  }

  /**
   * @description DELETE request using angular httpClient module
   * you can bass a parameter (data) in the url separated by '/'
   * @param url - the end point url
   * @param data - request payload
   * @return Observable of response, comes from the end point
   */
  delete(url: string, data?: any): Observable<any> {
    return this.http.delete(this.environemt.baseUrl + url + '/' + data);
  }

  deleteWithRequestBody(url: string, data?: any): Observable<any> {
    return this.http.delete(this.environemt.baseUrl + url, { body: data });
  }
}
