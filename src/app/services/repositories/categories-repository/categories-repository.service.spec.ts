import { TestBed, inject } from '@angular/core/testing';
import { CategoriesRepositoryService } from './categories-repository.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('CategoriesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesRepositoryService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([CategoriesRepositoryService], (service: CategoriesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
