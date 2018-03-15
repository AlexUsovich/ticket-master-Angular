import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {ObserveDataService} from '../../services/observe-data.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search-events',
  templateUrl: './search-events.component.html',
  styleUrls: ['./search-events.component.css']
})
export class SearchEventsComponent implements OnInit, OnDestroy {
  public title: string = 'Query results';
  public data: any;
  public events: any;
  public httpParams: any;
  public subscription: ISubscription;
  public previous: boolean = false;
  public next: boolean = true;

  public constructor(
    private http: GetDataService,
    private observeService: ObserveDataService,
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.observeService.getDataStream().subscribe( (params: any) => {
      this.httpParams = params;
      this.http.getEventsData(params).subscribe((data: any): void => {
        this.data = data;
        if (data._embedded !== undefined) {
          if (this.data.page.totalPages === 1) {
            this.next = this.previous = false;
          } else {
            this.next = true;
            this.previous = false;
          }
          this.events = data._embedded.events;
          this.title = 'Query results';
        } else {
          this.events = null;
          this.title = 'Nothing found for your request! Please, try again!';
          this.next = false;
        }
      });
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public changePage(button: string): void {
    const page: number = +this.httpParams.get('page');
    if (button === 'next') {
      this.previous = true;
      this.httpParams = this.httpParams.set('page', page + 1);
      if (page + 2 !== this.data.page.totalPages ) {
        this.next = true;
      } else {
        this.next = false;
      }
    }
    if (button === 'previous') {
      this.next = true;
      this.httpParams = this.httpParams.set('page', page - 1);
      if (page !== 1) {
        this.previous = true;
      } else {
        this.previous = false;
      }
    }
    this.http.getEventsData(this.httpParams).subscribe((data: any): void => {
      this.events = data._embedded.events;
    });
  }

}
