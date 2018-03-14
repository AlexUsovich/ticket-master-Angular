import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ObserveDataService {
  public _dataStream$: Subject<any> = new BehaviorSubject<any>(1);

  public getDataStream(): Observable<any> {
    return this._dataStream$.asObservable();
  }

  public setDataStream(data: any): void {
    this._dataStream$.next(data);
  }

}
