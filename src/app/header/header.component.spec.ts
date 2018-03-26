import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {BurgerMenuComponent} from "./burger-menu/burger-menu.component";
import {CategoriesComponent} from "./categories/categories.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {ObserveDataService} from "../services/data-stream-service/data-stream.service";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ObserveDataService],
      declarations: [ HeaderComponent, BurgerMenuComponent, CategoriesComponent, SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
