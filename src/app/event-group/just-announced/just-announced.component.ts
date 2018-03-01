import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import {GetDataService} from '../../services/get-data.service';
import {DateTimeService} from '../../services/date-time.service';

@Component({
  selector: 'app-just-announced',
  templateUrl: './just-announced.component.html',
  styleUrls: ['./just-announced.component.css']
})
export class JustAnnouncedComponent implements OnInit {

  public constructor(private http: GetDataService, private datetime: DateTimeService) {
  }

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    const today: any = this.datetime.today;
    const inWeek: any = this.datetime.inWeek;
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('size', '4');
    httpParams = httpParams.set('startDateTime', today);
    httpParams = httpParams.set('endDateTime', inWeek);

    this.http.getEventsData(httpParams).subscribe((data: any): void => {
      alert('!');
    });
  }

}
