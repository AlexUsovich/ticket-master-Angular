import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {ObserveDataService} from '../../services/observe-data.service';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit {
  public title: string = 'Query results';
  public events: any;

  public constructor(
    private http: GetDataService,
    private observeService: ObserveDataService,
  ) {
  }

  public ngOnInit(): void {
    this.observeService.getDataStream().subscribe( (data: any) => {
      if (data._embedded !== undefined) {
        this.events = data._embedded.events;
        this.title = 'Query results';
      } else {
        this.events = null;
        this.title = 'Nothing found for your request! Please, try again!';
      }
    });
  }
}
