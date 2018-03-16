import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import { Event } from '../event';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['../event/event.component.css', './event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {
  public event: any;
  public subscription: ISubscription;

  public constructor(
    private location: Location,
    public observeService: ObserveDataService
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.observeService.getEventData().subscribe((data: any) => {
      this.event = new Event(data);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private goBack(): void {
    this.location.back();
  }

}
