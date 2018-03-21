import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningSoonComponent } from './happening-soon.component';
import {EventComponent} from "../event/event.component";
import {EventsRepositoryService} from "../../services/repositories/events-repository/events-repository.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {DateTimeService} from "../../services/date-time-service/date-time.service";

describe('HappeningSoonComponent', () => {
  let component: HappeningSoonComponent;
  let fixture: ComponentFixture<HappeningSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [EventsRepositoryService, HttpClient, HttpHandler, DateTimeService],
      declarations: [ HappeningSoonComponent, EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
