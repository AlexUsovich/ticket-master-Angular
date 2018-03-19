import { TestBed, inject } from '@angular/core/testing';

import { EventsRepositoryService } from './events-repository.service';

describe('EventsRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsRepositoryService]
    });
  });

  it('should be created', inject([EventsRepositoryService], (service: EventsRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
