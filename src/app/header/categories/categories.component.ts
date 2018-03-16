import { Component, OnInit } from '@angular/core';
import {ObserveDataService} from '../../services/data-stream-service/data-stream.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public categories: Array<string> = ['Music', 'Sport', 'Arts & Theater', 'Family'];

  public constructor(
    public observeService: ObserveDataService
  ) { }

  public onClick(category: string): void {
    const params: any = {
      page: 0,
      size: 10,
      classificationName: category
    };
    this.observeService.setDataStream(params);
  }

}
