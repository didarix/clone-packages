import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CoreConfigService } from '../CoreConfig.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private coreConfigService: CoreConfigService) {}

  get getUserTokenKey() {
    return this.coreConfigService.configuration.userTokenKey ?? 'secret';
  }

  /**
   * get user langauage key that setted in his storage
   */
  get getUserLanguageKey() {
    return this.coreConfigService.configuration.userLanguageKey ?? 'lang';
  }

  /**
   * Save items to local storage as observable
   * By key, value pairs
   * @param key the name of property
   * @param value the value we need to store
   */
  setItem(key: string, value: string): Observable<void> {
    return of(localStorage.setItem(key, value));
  }

  /**
   * Get the value from local storage for a given property as observable
   * @param key the key of the item we need
   * @returns  the value of the given key
   */
  getItem(key: string): Observable<string | null> {
    return of(localStorage.getItem(key));
  }

  /**
   * Save items to local storage
   * By key, value pairs
   * @param key the name of property
   * @param value the value we need to store
   */
  setStringItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  /**
   * Get the value from local storage for a given property
   * @param  key the key of the item we need
   * @returns  the value of the given key
   */
  getStringItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Remove the value from local storage for a given property
   * @param key the key of the item we need
   * @returns  the value of the given key
   */
  removeItem(key: string) {
    return localStorage.removeItem(key);
  }

  /**
   * Get the token for the current active user
   * @returns  User Token it's by default secret
   */
  getToken(): string | null {
    const keyToken = this.getUserTokenKey ?? 'secret';
    return localStorage.getItem(keyToken);
  }

  /**
   * Clear the localStorage and active variables
   */
  clearStorage(): Observable<void> {
    location.reload();
    return of(localStorage.clear());
  }

  /**
   *
   * @description Get the current language for the user
   * @returns Current Language
   *
   */
  getLang(): string {
    const languageKey = this.getUserLanguageKey;
    return localStorage.getItem(languageKey) ?? 'ar';
  }
}
