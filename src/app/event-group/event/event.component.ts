import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
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
  public opened: boolean = false;

  public constructor(
    public observe: ObserveDataService
  ) {
  }

  public ngOnInit(): void {
    if (window.matchMedia('(min-width: 900px)').matches) {
      this.opened = true;
    }
    if ( this.data ) {
      this.image = this.data.images[0].url;
      this.title = this.data.name;
      this.venues = `${this.data._embedded.venues[0].name}in${this.data._embedded.venues[0].city.name}`;
      this.description = this.data.info;
      if ((this.data._embedded.venues[0].name) && (this.data._embedded.venues[0].city.name)) {
        this.venues = `${this.data._embedded.venues[0].name}in${this.data._embedded.venues[0].city.name}`;
      }
      this.description = this.data.info;
      if ((this.data.classifications) && (this.data.classifications[0].subGenre.name)) {
        this.classifications = `${this.data.classifications[0].genre.name}/${this.data.classifications[0].subGenre.name}`;
      }
      if (this.data.dates.start.localDate) {
        this.date = this.data.dates.start.localDate;
        this.day = this.data.dates.start.localDate.substr(8, 2);
      }
      if (this.data.dates.start.localTime) { this.time =  ` at ${this.data.dates.start.localTime.substr(0, 5)}`; }
      enum mS {'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'}
      this.month = mS[this.data.dates.start.localDate.substr(5, 2) - 1];
    }
  }

  public openOneEvent(): void {
    this.observe.setEventData(this.data);
  }

  public readMore(): void {
    this.opened = !this.opened;
  }
}
