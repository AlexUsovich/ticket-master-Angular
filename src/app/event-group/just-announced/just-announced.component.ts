import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {GetDataService} from '../../services/get-data-service/get-data.service';
import {DateTimeService} from '../../services/date-time-service/date-time.service';

@Component({
  selector: 'app-just-announced',
  templateUrl: './just-announced.component.html',
  styleUrls: ['./just-announced.component.css']
})
export class JustAnnouncedComponent implements OnInit {
  public events: any;

  public constructor(
    private getDataService: GetDataService,
    private dateTimeService: DateTimeService
  ) {
  }

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    const today: any = this.dateTimeService.getTodayDate();
    const inWeek: any = this.dateTimeService.getInWeekDate();
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('size', '4');
    httpParams = httpParams.set('onsaleStartDateTime', today);
    httpParams = httpParams.set('onsaleEndDateTime', inWeek);

    this.getDataService.getEventsData(httpParams).subscribe((data: any): void => {
      this.events = data._embedded.events;
    });
  }

}
