import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { BurgerMenuComponent } from './headline/burger-menu/burger-menu.component';
import { SearchBarComponent } from './headline/search-bar/search-bar.component';
import { CategoriesComponent } from './headline/categories/categories.component';
import { AddOptionsComponent } from './add-options/add-options.component';
import { EventGroupComponent } from './event-group/event-group.component';
import { JustAnnouncedComponent } from './event-group/just-announced/just-announced.component';
import { HappeningSoonComponent } from './event-group/happening-soon/happening-soon.component';
import { SearchEventsComponent } from './event-group/search-events/search-events.component';
import { EventComponent } from './event-group/event/event.component';
import { GetDataService } from './services/get-data.service';
import { DateTimeService } from './services/date-time.service';
import { RouterModule } from '@angular/router';
import {ObserveDataService} from './services/observe-data.service';
import { EventDetailComponent } from './event-group/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: EventGroupComponent},
      {path: 'search', component: SearchEventsComponent},
      {path: 'event-detail', component: EventDetailComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  providers: [
    GetDataService,
    DateTimeService,
    ObserveDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
