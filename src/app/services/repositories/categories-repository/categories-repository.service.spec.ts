import { TestBed, inject } from '@angular/core/testing';

import { CategoriesRepositoryService } from './categories-repository.service';

describe('CategoriesRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesRepositoryService]
    });
  });

  it('should be created', inject([CategoriesRepositoryService], (service: CategoriesRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
