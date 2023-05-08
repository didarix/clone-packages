import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';

/**
 * Interceptors Wrapper
 * An array to wrap all interceptors using at the app
 */
export const INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlingInterceptor,
    multi: true,
  },
];
