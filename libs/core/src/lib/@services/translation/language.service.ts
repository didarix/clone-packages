import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

export enum ELang {
  EN = 'en',
  AR = 'ar',
}

export enum EBodyLangClass {
  EN = 'lang-en',
  AR = 'lang-ar',
}
@Injectable({
  providedIn: 'root',
})

/**
 * Manipulate the Language for the whole app
 * handle use the default, change, toggle language services
 */
export class LanguageService {
  constructor(
    private translate: TranslateService,
    private storage: StorageService
  ) {}

  /**
   * Enable the language translation options,
   * Set the language to the current user preferred language
   */
  // enableLanguage(): void {
  //   this.translate.setDefaultLang('en');
  //   this.translate.use(this.currentLanguage());
  // }

  enableLanguage(defaultLang?: ELang.AR | ELang.EN): void {
    const checkIfLangSent = defaultLang ? defaultLang : ELang.EN;
    this.translate.setDefaultLang(checkIfLangSent);
    this.translate.use(this.currentLanguage());
  }

  currentLanguage(): string {
    return this.storage.getLang();
  }

  /**
   * Change the language for the site
   * you can bass a parameter (lang) to the target language
   * @param lang - the target language param
   * @return Returns void
   */
  setLanguage(lang: string): void {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.storage.setItem('lang', lang).subscribe(() => {
      this.translate.use(lang);
    });
  }

  /**
   * Toggle the body element lang class
   */
  toggleBodyLanguageClass(): void {
    const bodyClass = document?.querySelector('body')?.classList;
    bodyClass?.remove(EBodyLangClass.AR, EBodyLangClass.EN);

    if (this.isEnglish()) return bodyClass?.add(EBodyLangClass.EN);
    return bodyClass?.add(EBodyLangClass.AR);
  }

  /**
   * Toggle the current language
   */
  toggleLanguage(enableReloading: boolean = true): void {
    const toggleLang = this.isEnglish() ? ELang.AR : ELang.EN;
    this.setLanguage(toggleLang);
    this.setStyle(toggleLang);

    if (enableReloading) location.reload();
  }

  /**
   * Check the Current Language if english or not
   * @returns True if the current language is english
   */
  isEnglish(): boolean {
    return this.currentLanguage() === ELang.EN;
  }

  languageChanged(): Observable<any> {
    return this.translate.onLangChange;
  }

  /**
   *
   * @description translate at typescript with translation key
   * @param key - the translation key
   * @returns - the translated value
   *
   */
  translateTs(key: string): string {
    return this.translate.instant(key);
  }

  /**
   *
   * @description translate at typescript with translation key
   * @param key - the translation key
   * @returns - the translated value
   *
   */
  stream(key: string) {
    return this.translate.stream(key);
  }

  setStyle(lang: string) {
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    document.body.setAttribute('dir', lang === ELang.AR ? 'rtl' : 'ltr');
    document.body.classList.remove(EBodyLangClass.EN, EBodyLangClass.AR);
    document.body.classList.add(
      lang === ELang.EN ? EBodyLangClass.EN : EBodyLangClass.AR
    );

    document
      ?.querySelector('body')
      ?.setAttribute(
        'style',
        lang == ELang.AR ? 'text-align:right' : 'text-align:left'
      );
  }
}
