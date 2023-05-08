import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { LanguageService } from '../@services/translation/language.service';

@Directive({
  selector: '[appSetRTL]'
})
export class RtlDirective {


  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private translation: LanguageService
  ) {
    this.switchClassBasedOnLanguage();
  }

  /*Switch rtl class based on the chosen language from Translation Service*/
  switchClassBasedOnLanguage() {
    this.translation.isEnglish() ? this.renderer.removeClass(this.elRef.nativeElement, 'rtl') : this.renderer.addClass(this.elRef.nativeElement, 'rtl');
    this.translation.languageChanged().subscribe((lang) => {
      this.translation.isEnglish() ? this.renderer.removeClass(this.elRef.nativeElement, 'rtl') : this.renderer.addClass(this.elRef.nativeElement, 'rtl');
    });
  }

}
