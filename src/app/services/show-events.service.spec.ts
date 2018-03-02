import { TestBed, inject } from '@angular/core/testing';

import { ShowEventsService } from './show-events.service';

describe('ShowEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowEventsService]
    });
  });

  it('should be created', inject([ShowEventsService], (service: ShowEventsService) => {
    expect(service).toBeTruthy();
  }));
});
