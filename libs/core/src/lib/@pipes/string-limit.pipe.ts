import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strLimit',
})
export class StringLimitPipe implements PipeTransform {
  transform(
    value: string,
    limit = 25,
    completeWords = false,
    ellipsis = '...'
  ) {
    if (completeWords) limit = value.substr(0, limit).lastIndexOf(' ');

    value = value ?? ' ';

    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
