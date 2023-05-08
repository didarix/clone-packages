import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestHeadersService } from './request-headers.service';

@Injectable({
  providedIn: 'root',
})

/**
 * Token Interceptor
 * An Interceptor for add auth token to the header of each http
 */
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private headers: RequestHeadersService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({ setHeaders: this.headers.headers });
    return next.handle(request);
  }
}
