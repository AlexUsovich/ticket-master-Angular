import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DateTimeService } from '../services/date-time-service/date-time.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ObserveDataService } from '../services/data-stream-service/data-stream.service';
import {CategoriesRepositoryService} from '../services/repositories/categories-repository/categories-repository.service';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.css']
})

export class AddOptionsComponent implements OnInit {
  @Output() public searchData: EventEmitter<any> = new  EventEmitter<any>();

  public additionalForm: FormGroup;

  public categories: Array<string> = ['Select category'];
  public genres: Array<string> = ['Select sub category'];
  public data: any;
  public inWeek: any;
  public today: any;

  private categoryTypeSubscription: Subscription;

  public constructor(
    private repositoryService: CategoriesRepositoryService,
    public observeService: ObserveDataService,
    private dateTimeService: DateTimeService,
    private fb: FormBuilder
  ) {
  }

  public ngOnInit(): void {
    this.today = this.dateTimeService.getTodayCalendarDate();
    this.inWeek = this.dateTimeService.getInWeekCalendarDate();
    this.getCategory();
    this.initForm();
    this.subscribeToUserType();
  }

  private ngOnDestroy(): void {
    this.categoryTypeSubscription.unsubscribe();
  }

  private initForm(): void {
    this.additionalForm = this.fb.group({
      category: null,
      subcategory: null,
      city: null,
      startDate: this.today,
      endDate: this.inWeek,
    });
  }

  private subscribeToUserType(): void {
    this.categoryTypeSubscription = this.additionalForm.get('category')
      .valueChanges
      .subscribe((value: any): void => {
        this.getSubCategory(value);
        this.additionalForm.patchValue({
          subcategory: 'Select sub category'
        });
      });
  }

  private getCategory(): void {
    this.repositoryService.getCategoriesData().subscribe( (data: any): void => {
      this.data = data;
      this.data.forEach( (classification: any) => {
        if (classification.segment) {
          this.categories.push(classification.segment.name);
        }
      });
    });
  }

  private getSubCategory(category: string): void {
    this.genres = ['Select sub category'];
    this.data.forEach( (classification: any) => {
      if (classification.segment && classification.segment.name === category) {
        classification.segment._embedded.genres.forEach((genre: any) => {
          this.genres.push(genre.name);
        });
      }
    });
  }

  private getInformation(): void {
    const params: any = {
      page: 0,
      size: 10,
      city: null,
      classificationName: null,
      keyword: null,
      startDateTime: this.dateTimeService.convertData(this.additionalForm.get('startDate').value),
      endDateTime: this.dateTimeService.convertData(this.additionalForm.get('endDate').value)
    };
    params.city = this.additionalForm.get('city').value;
    if (this.additionalForm.get('category').value !== 'Select category') {params.classificationName = this.additionalForm.get('category').value; }
    if (this.additionalForm.get('subcategory').value !== 'Select sub category') {params.keyword = this.additionalForm.get('subcategory').value; }
    this.observeService.setDataStream(params);
  }

}
