import { Injectable } from '@angular/core';
import {BaseRepositoryService} from '../base-repository/base-repository.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsRepositoryService extends BaseRepositoryService {
  public SOURCE: string = 'events.json';

  public getEventsData(params: any): Observable<any> {
    return this.getData(this.SOURCE, params);
    // return this.httpClient.get(this.getUrl(this.SOURCE), { params: params });
  }

}
