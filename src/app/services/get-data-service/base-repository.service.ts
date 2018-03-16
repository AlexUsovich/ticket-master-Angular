import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseRepositoryService {

  private APIURL: string = 'https://app.ticketmaster.com/discovery/v2/';
  private APIKEY: string = '?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP';
  private APIKEY2: string = '?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';
  private CATEGORY: string = 'classifications.json';
  private EVENTS: string = 'events.json';

  public constructor(public httpClient: HttpClient) { }

  public getCategoryData(): Observable<any> {
    const fullUrl: string = `${this.APIURL}${this.CATEGORY}${this.APIKEY2}`;
    return this.httpClient.get(fullUrl);
  }

  public getEventsData(params: any): Observable<any> {
    const fullUrl: string = `${this.APIURL}${this.EVENTS}${this.APIKEY}`;
    return this.httpClient.get(fullUrl, { params: params });
  }

}
