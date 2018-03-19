import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {DateTimeService} from '../../services/date-time-service/date-time.service';
import {EventsRepositoryService} from '../../services/repositories/events-repository/events-repository.service';

@Component({
  selector: 'app-happening-soon',
  templateUrl: './happening-soon.component.html',
  styleUrls: ['./happening-soon.component.css']
})
export class HappeningSoonComponent implements OnInit {
  public events: any;

  public constructor(
    private repositoryService: EventsRepositoryService,
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
    httpParams = httpParams.set('startDateTime', today);
    httpParams = httpParams.set('endDateTime', inWeek);

    this.repositoryService.getEventsData(httpParams).subscribe((data: any): void => {
      this.events = data._embedded.events;
    });
  }

}
