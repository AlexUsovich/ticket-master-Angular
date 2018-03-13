import { TestBed, inject } from '@angular/core/testing';

import { ObserveDataService } from './observe-data.service';

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
