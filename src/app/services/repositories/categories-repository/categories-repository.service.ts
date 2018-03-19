import { Injectable } from '@angular/core';
import {BaseRepositoryService} from '../base-repository/base-repository.service';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesRepositoryService extends BaseRepositoryService {
  private SOURCE: string = 'classifications.json';

  public getCategoriesData(): Observable<any> {
    return this.getData(this.SOURCE, null)
      .map((data: any) => data._embedded.classifications);
  }

}
