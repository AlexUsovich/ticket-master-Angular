import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ObserveDataService {
  public _dataStream$: Subject<any> = new BehaviorSubject<any>(null);
  public _eventData: Subject<any> = new BehaviorSubject<any>(null);

  public getDataStream(): Observable<any> {
    return this._dataStream$.asObservable();
  }

  public setDataStream(data: any): void {
    this._dataStream$.next(data);
  }

  public getEventData(): Observable<any> {
    return this._eventData.asObservable();
  }

  public setEventData(data: any): void {
    this._eventData.next(data);
  }

}
