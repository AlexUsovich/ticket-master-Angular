import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpParams} from "@angular/common/http";

@Injectable()
export class ObserveDataService {
  public _dataStream$: Subject<any> = new BehaviorSubject<any>(null);
  public _eventData: Subject<any> = new BehaviorSubject<any>(null);

  public getDataStream(): Observable<any> {
    return this._dataStream$.asObservable();
  }

  public setDataStream(data: any): void {
    let httpParams: any = new HttpParams();
    Object.keys(data).forEach((key: string) => {
      if (data[key] !== null) {
        httpParams = httpParams.set(key, data[key]);
      }
    });
    this._dataStream$.next(httpParams);
  }

  public getEventData(): Observable<any> {
    return this._eventData.asObservable();
  }

  public setEventData(data: any): void {
    this._eventData.next(data);
  }

}
