import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CategoriesRepositoryService} from './services/repositories/categories-repository/categories-repository.service';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, FormsModule, NgControl} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {AddOptionsComponent} from './add-options/add-options.component';
import {HappeningSoonComponent} from './event-group/happening-soon/happening-soon.component';
import {SearchEventsComponent} from './event-group/search-events/search-events.component';
import {EventGroupComponent} from './event-group/event-group.component';
import {SearchBarComponent} from './header/search-bar/search-bar.component';
import {EventComponent} from './event-group/event/event.component';
import {BurgerMenuComponent} from './header/burger-menu/burger-menu.component';
import {CategoriesComponent} from './header/categories/categories.component';
import {EventDetailComponent} from './event-group/event-detail/event-detail.component';
import {JustAnnouncedComponent} from './event-group/just-announced/just-announced.component';
import {DateTimeService} from "./services/date-time-service/date-time.service";
import {EventsRepositoryService} from "./services/repositories/events-repository/events-repository.service";
import {ObserveDataService} from "./services/data-stream-service/data-stream.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule],
      providers: [
        DateTimeService,
        ObserveDataService,
        CategoriesRepositoryService,
        EventsRepositoryService,
        FormBuilder
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BurgerMenuComponent,
        SearchBarComponent,
        CategoriesComponent,
        AddOptionsComponent,
        EventGroupComponent,
        JustAnnouncedComponent,
        HappeningSoonComponent,
        SearchEventsComponent,
        EventComponent,
        EventDetailComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
