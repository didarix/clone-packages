import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourFormat',
})
export class HoursFormat implements PipeTransform {
  transform(value: any) {
    if (value.toString().length == 1) {
      return '0' + value;
    } else {
      return value;
    }
  }
}
