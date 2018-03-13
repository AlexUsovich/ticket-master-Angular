import {Component, Input, OnInit} from '@angular/core';
import {ObserveDataService} from '../../services/observe-data.service';
import {HttpParams} from '@angular/common/http';
import {GetDataService} from '../../services/get-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() public openedSearch: boolean;

  public constructor(
    public observe: ObserveDataService,
    private http: GetDataService
  ) { }

  public ngOnInit(): void {
  }

  public onSubmit(expression: string): void {
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('size', '10');
    httpParams = httpParams.set('keyword', expression);
    this.http.getEventsData(httpParams).subscribe( (data: any): void => {
      console.log(data);
      this.observe.setDataStream(data);
    });
  }

}
