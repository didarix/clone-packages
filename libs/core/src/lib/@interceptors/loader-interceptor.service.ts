import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../@services';

@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService implements HttpInterceptor {
  private totalRequests = 0;

  constructor(public loaderService: LoaderService) {}

  checkToHide() {
    if (this.totalRequests === 0) {
      this.loaderService.hide();
    }
  }

  decrementCounter() {
    this.totalRequests--;
  }

  incrementCounter() {
    this.totalRequests++;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.incrementCounter();

    this.loaderService.show();

    return next.handle(req).pipe(
      catchError((error) => {
        this.totalRequests = 0;

        this.decrementCounter();

        this.checkToHide();

        return of(error);
      }),
      finalize(() => {
        this.decrementCounter();

        this.checkToHide();
      })
    );
  }
}
