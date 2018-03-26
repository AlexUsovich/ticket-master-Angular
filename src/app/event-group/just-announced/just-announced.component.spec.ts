import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustAnnouncedComponent } from './just-announced.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {DateTimeService} from '../../services/date-time-service/date-time.service';
import {EventsRepositoryService} from '../../services/repositories/events-repository/events-repository.service';
import {EventComponent} from '../event/event.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('JustAnnouncedComponent', () => {
  let component: JustAnnouncedComponent;
  let fixture: ComponentFixture<JustAnnouncedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [EventsRepositoryService, DateTimeService],
      declarations: [ JustAnnouncedComponent, EventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustAnnouncedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
