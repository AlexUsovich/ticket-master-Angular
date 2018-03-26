import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEventsComponent } from './search-events.component';
import {EventComponent} from "../event/event.component";
import {EventsRepositoryService} from "../../services/repositories/events-repository/events-repository.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {ObserveDataService} from "../../services/data-stream-service/data-stream.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SearchEventsComponent', () => {
  let component: SearchEventsComponent;
  let fixture: ComponentFixture<SearchEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [EventsRepositoryService, ObserveDataService],
      declarations: [ SearchEventsComponent, EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
