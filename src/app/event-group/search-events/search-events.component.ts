import {Component, OnDestroy, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data-service/get-data.service';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';
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
    private getDataService: GetDataService,
    private observeService: ObserveDataService,
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.observeService.getDataStream().subscribe( (params: any) => {
      this.httpParams = params;
      this.getEvents();
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public nextPage(button: string): void {
    const page: number = +this.httpParams.get('page');
    this.previous = true;
    this.httpParams = this.httpParams.set('page', page + 1);
    this.next = page + 2 !== this.data.page.totalPages;
    this.getEvents();
  }

  public previousPage(button: string): void {
    const page: number = +this.httpParams.get('page');
    this.next = true;
    this.httpParams = this.httpParams.set('page', page - 1);
    this.previous = page !== 1;
    this.getEvents();
  }

  public getEvents(): void {
    this.getDataService.getEventsData(this.httpParams).subscribe((data: any): void => {
      this.data = data;
      if (data._embedded !== undefined) {
        this.events = data._embedded.events;
        this.title = 'Query results';
      } else {
        this.events = null;
        this.title = 'Nothing found for your request! Please, try again!';
        this.next = this.previous = false;
      }
      if (this.data.page.totalPages === 1) {
        this.next = this.previous = false;
      }
    });
  }

}
