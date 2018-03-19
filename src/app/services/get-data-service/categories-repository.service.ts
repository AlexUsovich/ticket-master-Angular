import { Injectable } from '@angular/core';
import {BaseRepositoryService} from './base-repository.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoriesRepositoryService extends BaseRepositoryService {
  private SOURCE: string = 'classifications.json';

  public constructor(public httpClient: HttpClient) {
    super();
  }

  public getCategoriesData(): Observable<any> {
    return this.httpClient.get(this.getUrl(this.SOURCE));
  }

}
