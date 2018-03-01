import { Injectable, Output } from '@angular/core';

@Injectable()
export class DateTimeService {
  public today: any;
  public todayCalendar: any;
  public tomorrow: any;
  public inWeek: any;
  public inWeekCalendar: any;

  public constructor() {
    const newDate: any = new Date();
    this.today = newDate.toISOString().substr(0, 19) + 'Z';
    this.todayCalendar = newDate.toISOString().substr(0, 10);
    newDate.setDate(newDate.getDate() + 1);
    this.tomorrow = newDate.toISOString().substr(0, 19) + 'Z';
    newDate.setDate(newDate.getDate() + 6);
    this.inWeek = newDate.toISOString().substr(0, 19) + 'Z';
    this.inWeekCalendar = newDate.toISOString().substr(0, 10);
  }

}
