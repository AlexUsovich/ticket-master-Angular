import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';
import {ObserveDataService} from '../../services/observe-data.service';
import {HttpParams} from '@angular/common/http';
import {GetDataService} from '../../services/get-data.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() public additionalBlock: any = new EventEmitter<boolean>();
  @Input() public isOpen: boolean;

  public constructor(
    public observeService: ObserveDataService
  ) { }

  public ngOnInit(): void {
  }

  public onSubmit(expression: string): void {
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('page', '0');
    httpParams = httpParams.set('size', '10');
    httpParams = httpParams.set('keyword', expression);
    this.observeService.setDataStream(httpParams);
  }

  public closeOpen(): void {
    this.isOpen = !this.isOpen;
    this.additionalBlock.emit(this.isOpen);
  }

}
