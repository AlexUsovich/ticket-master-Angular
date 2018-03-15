import { Component, OnInit } from '@angular/core';
import {ObserveDataService} from "../../services/observe-data.service";
import {HttpParams} from "@angular/common/http";
import {GetDataService} from "../../services/get-data.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public constructor(
    public observeService: ObserveDataService
  ) { }

  public ngOnInit(): void {
  }

  public onClick(category: string): void {
    let httpParams: any = new HttpParams();
    httpParams = httpParams.set('page', '0');
    httpParams = httpParams.set('size', '10');
    httpParams = httpParams.set('classificationName', category);
    this.observeService.setDataStream(httpParams);
  }

}
