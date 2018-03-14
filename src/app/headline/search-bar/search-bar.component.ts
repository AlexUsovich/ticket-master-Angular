import {Component, Input, OnInit} from '@angular/core';
import {ObserveDataService} from '../../services/observe-data.service';
import {HttpParams} from '@angular/common/http';
import {GetDataService} from '../../services/get-data.service';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() public openedSearch: boolean;
  public additionalForm: FormGroup;

  public constructor(
    public observe: ObserveDataService,
    private http: GetDataService
  ) { }

  public ngOnInit(): void {
  }

  public keyDownFunction(event: any, expression: string): void {
    if (event.keyCode === 13) {
      this.onSubmit(expression);
    }
  }

  public onSubmit(expression: string): void {
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('size', '10');
    httpParams = httpParams.set('keyword', expression);
    this.http.getEventsData(httpParams).subscribe( (data: any): void => {
      this.observe.setDataStream(data);
    });
  }

}
