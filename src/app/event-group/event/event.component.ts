import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() public data: any;
  public event: any;
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
      this.event = new Event(this.data);
    }
  }

  public openOneEvent(): void {
    this.observe.setEventData(this.data);
  }

  public readMore(): void {
    this.opened = !this.opened;
  }
}
