import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['../event/event.component.css', './event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  @Input() public data: any;
  public image: string;
  public title: string;
  public venues: string;
  public description: string;
  public classifications: string;
  public date: string;
  public day: string;
  public time: string;
  public month: any;
  public subscription: ISubscription;

  public constructor(
    private location: Location,
    public observeService: ObserveDataService
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.observeService.getEventData().subscribe((data: any) => {
      this.data = data;
      if ( this.data.page === undefined) {
        this.image = this.data.images[0].url;
        this.title = this.data.name;
        this.description = this.data.info;
        if ((this.data._embedded.venues[0].name) && (this.data._embedded.venues[0].city.name)) {
          this.venues = `${this.data._embedded.venues[0].name}in${this.data._embedded.venues[0].city.name}`;
        }
        this.description = this.data.info;
        if ((this.data.classifications) && (this.data.classifications[0].subGenre.name)) {
          this.classifications = `${this.data.classifications[0].genre.name}/${this.data.classifications[0].subGenre.name}`;
        }
        this.getDate(this.data);
        this.pickImage(this.data.images);
      }
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getDate(data: any): void {
    if (data.dates.start.localDate) {
      this.date = data.dates.start.localDate;
      this.day = data.dates.start.localDate.substr(8, 2);
    }
    if (data.dates.start.localTime) { this.time =  ` at ${data.dates.start.localTime.substr(0, 5)}`; }
    enum mS {'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'}
    this.month = mS[data.dates.start.localDate.substr(5, 2) - 1];
  }

  private pickImage(images: any): void {

  }

  private goBack(): void {
    this.location.back();
  }

}
