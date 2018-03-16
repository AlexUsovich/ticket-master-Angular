import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BaseRepositoryService {

  public APIURL: string = 'https://app.ticketmaster.com/discovery/v2/';
  public APIKEY: string = '?apikey=L0PyfJDj2ZZyu2MliXSsP4ITRgBfWceP';
  public APIKEY2: string = '?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0';

  public getUrl(source: string): string {
    return `${this.APIURL}${source}${this.APIKEY2}`;
  }

}
