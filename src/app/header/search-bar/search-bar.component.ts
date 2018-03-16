import {Component, Output, OnInit, EventEmitter, Input} from '@angular/core';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';
import {HttpParams} from '@angular/common/http';
import {GetDataService} from '../../services/get-data-service/get-data.service';
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
    const params: any = {
      page: 0,
      size: 10,
      keyword: expression
    };
    this.observeService.setDataStream(params);
  }

  public closeOpen(): void {
    this.isOpen = !this.isOpen;
    this.additionalBlock.emit(this.isOpen);
  }

}
