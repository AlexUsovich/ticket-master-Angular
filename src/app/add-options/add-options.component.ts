import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { DateTimeService } from '../services/date-time.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.css']
})
export class AddOptionsComponent implements OnInit {
  public additionalForm: FormGroup;

  public categories: Array<string> = ['Select category'];
  public genres: Array<string> = ['Select sub category'];
  public data: any;
  public inWeek: any;
  public today: any;

  private categoryTypeSubscription: Subscription;

  public constructor(private http: GetDataService, private datetime: DateTimeService, private fb: FormBuilder) {
    this.today = datetime.todayCalendar;
    this.inWeek = datetime.inWeekCalendar;
  }

  public ngOnInit(): void {
    this.getCategory();
    this.initForm();
    this.subscribeToUserType();
  }

  private ngOnDestroy(): void {
    this.categoryTypeSubscription.unsubscribe();
  }

  private initForm(): void {
    this.additionalForm = this.fb.group({
      category: null
    });
  }

  private subscribeToUserType(): void {
    this.categoryTypeSubscription = this.additionalForm.get('category')
      .valueChanges
      .subscribe((value: any): void => this.getSubCategory(value));
  }

  private getCategory(): void {
    this.http.getCategoryData().subscribe( (data: any): void => {
      this.data = data._embedded.classifications;
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
}
