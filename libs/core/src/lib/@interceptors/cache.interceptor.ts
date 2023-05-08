import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Cache-Control': 'no-cache, no-store, must-revalidate, post- check=0, pre- check=0',
        Pragma: 'no-cache',
        Expires: '0',
      }
    });
    return next.handle(request);
  }
}
