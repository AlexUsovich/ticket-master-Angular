import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseRepositoryService {

  public APIURL: string = 'https://app.ticketmaster.com/discovery/v2/';
  public APIKEY: string = '?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP';
  public APIKEY2: string = '?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

  public constructor(public httpClient: HttpClient) {
  }

  public getUrl(source: string): string {
    return `${this.APIURL}${source}${this.APIKEY}`;
  }

  public getData(source: string, params: any): Observable<any> {
    return this.httpClient.get(this.getUrl(source), { params: params });
  }

}
