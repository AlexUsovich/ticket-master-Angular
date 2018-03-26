import { TestBed, inject } from '@angular/core/testing';

import { EventsRepositoryService } from './events-repository.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('EventsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsRepositoryService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([EventsRepositoryService], (service: EventsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
