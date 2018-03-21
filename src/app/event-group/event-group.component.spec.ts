import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGroupComponent } from './event-group.component';
import {JustAnnouncedComponent} from "./just-announced/just-announced.component";
import {HappeningSoonComponent} from "./happening-soon/happening-soon.component";
import {EventComponent} from "./event/event.component";
import {EventsRepositoryService} from "../services/repositories/events-repository/events-repository.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {DateTimeService} from "../services/date-time-service/date-time.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Observable} from "rxjs/Observable";

describe('EventGroupComponent', () => {
  let component: EventGroupComponent;
  let fixture: ComponentFixture<EventGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [EventsRepositoryService, HttpClient, HttpHandler, DateTimeService],
      declarations: [ EventGroupComponent, JustAnnouncedComponent, HappeningSoonComponent, EventComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
