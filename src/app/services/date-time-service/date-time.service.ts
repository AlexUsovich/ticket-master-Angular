import { Injectable, Output } from '@angular/core';

@Injectable()
export class DateTimeService {

  public getInWeekCalendarDate(): any {
    const newDate: any = new Date();
    newDate.setDate(newDate.getDate() + 7);
    return newDate.toISOString().substr(0, 10);
  }

  public getInWeekDate(): any {
    const newDate: any = new Date();
    newDate.setDate(newDate.getDate() + 7);
    return newDate.toISOString().substr(0, 19) + 'Z';
  }

  public getTomorrowDate(): any {
    const newDate: any = new Date();
    newDate.setDate(newDate.getDate() + 1);
    return newDate.toISOString().substr(0, 19) + 'Z';
  }

  public getTodayCalendarDate(): any {
    const newDate: any = new Date();
    return newDate.toISOString().substr(0, 10);
  }

  public getTodayDate(): any {
    const newDate: any = new Date();
    return newDate.toISOString().substr(0, 19) + 'Z';
  }

  public convertData(interDate: any): any {
    return new Date(interDate.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')).toISOString().substr(0, 19) + 'Z';
  }

}
