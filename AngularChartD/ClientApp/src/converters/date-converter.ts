import { Injectable } from '@angular/core';

@Injectable()
export class DateConverter {

  constructor() {
  }

  public static dateParse(value: any): Date | null {
    if ((typeof value === 'string') && (value.includes('/'))) {
      const str = value.split('/');

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);

      return new Date(year, month, date);
    } else if ((typeof value === 'string') && value === '') {
      return new Date();
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  public static dateToMonthAndYear(date: Date): string {
    return date.getMonth().toString() + "/" + date.getFullYear().toString();
  }
}
