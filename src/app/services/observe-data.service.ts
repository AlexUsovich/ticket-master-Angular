import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ObserveDataService {
  private _dataStream$: Subject<any> = new Subject<any>();

  public getDataStream(): Observable<any> {
    return this._dataStream$.asObservable();
  }

  public setDataStream(data: any): void {
    this._dataStream$.next(data);
  }

}
