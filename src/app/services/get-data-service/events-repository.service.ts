import { Injectable } from '@angular/core';
import {BaseRepositoryService} from './base-repository.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventsRepositoryService extends BaseRepositoryService {
  public SOURCE: string = 'events.json';

  public constructor(public httpClient: HttpClient) {
    super();
  }

  public getEventsData(params: any): Observable<any> {
    return this.httpClient.get(this.getUrl(this.SOURCE), { params: params });
  }

}
