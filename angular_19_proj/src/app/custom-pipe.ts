import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  private DatePipe = new DatePipe('en-US');
  transform(value: any, ...args: any[]): any {
    //   if (value == '' || value == null || value == undefined) {
    //     return 'NA';
    //   } else {
    //     return value ? '+237 ' + value : value;
    //   }
    // }

    if (value == '' || value == null || value == undefined) {
      return 'NA';
    } else {
      return value ? this.DatePipe.transform(value, 'dd-MMM-yyyy') : value;
    }
  }
}
