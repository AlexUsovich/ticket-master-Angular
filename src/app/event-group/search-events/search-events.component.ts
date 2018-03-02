import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {
  public events: any;

  public constructor(private http: GetDataService) {
  }

  public ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('size', '4');

    this.http.getEventsData(httpParams).subscribe((data: any): void => {
      alert('!cat!');
      this.events = data._embedded.events;
    });
  }

}
