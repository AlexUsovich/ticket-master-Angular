import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { AddOptionsComponent } from './add-options.component';
import {CategoriesRepositoryService} from '../services/repositories/categories-repository/categories-repository.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ObserveDataService} from '../services/data-stream-service/data-stream.service';
import {DateTimeService} from '../services/date-time-service/date-time.service';
import {ControlContainer, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddOptionsComponent', () => {

  let component: AddOptionsComponent;
  let fixture: ComponentFixture<AddOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CategoriesRepositoryService, ReactiveFormsModule, ControlContainer, HttpClient, HttpHandler, ObserveDataService, DateTimeService, FormBuilder],
      declarations: [ AddOptionsComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
    });
});
