import { TestBed, inject } from '@angular/core/testing';

import { ObserveDataService } from './data-stream.service';

describe('ObserveDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObserveDataService]
    });
  });

  it('should be created', inject([ObserveDataService], (service: ObserveDataService) => {
    expect(service).toBeTruthy();
  }));
});
