import { TestBed, inject } from '@angular/core/testing';

import { BaseRepositoryService } from './base-repository.service';
import {HttpClient, HttpHandler} from "@angular/common/http";

describe('BaseRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseRepositoryService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([BaseRepositoryService], (service: BaseRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
