// import { LanguageService } from './../translation/language.service';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { EToasterTypes, ToastService } from '../toaster/toaster.service';
// import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable({
  providedIn: 'root',
})

/**
 * `ConnectionService` used to check if the used device is connected to the Internet.
 */
export class ConnectionService {
  /**
   * A Boolean Observable flag.
   */
  private connectionMonitor = new BehaviorSubject<boolean>(navigator.onLine);
  // private snackbarService: SnackbarService
  constructor(private toaster: ToastService) {
    window.addEventListener('offline', (e) => {
      this.connectionMonitor.next(false);
    });
    window.addEventListener('online', (e) => {
      this.connectionMonitor.next(true);
    });
  }

  /**
   * `isConnected()` used for alert if the user connect/disconnect to the Internet.
   * @returns A Boolean Observables
   */
  isConnected(): Observable<boolean> {
    return this.connectionMonitor.asObservable();
  }

  checkConnection() {
    const lang = localStorage.getItem('lang');
    const toaster = () => {
      const message = 'CONNECTION.ONLINE';
      const title = 'TOASTER.SUCCESS';
      this.toaster.show({
        message: message,
        type: EToasterTypes.error,
      });
    };
    if (!navigator.onLine) toaster();
  }
}
