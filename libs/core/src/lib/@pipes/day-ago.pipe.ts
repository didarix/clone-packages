import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance, subDays } from 'date-fns';
import { arSA, enUS } from 'date-fns/locale';
import { LanguageService } from '../@services/translation/language.service';

@Pipe({
  name: 'DayAgo',
})
export class DayAgoPipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}
  transform(value: any) {
    if (value && value !== '-')
      return formatDistance(new Date(value), new Date(), {
        locale: this.languageService.currentLanguage() === 'ar' ? arSA : enUS,
        addSuffix: true,
      });

    return value;
  }
}
