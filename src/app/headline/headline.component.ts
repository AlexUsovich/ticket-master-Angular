import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  public openedBurger: boolean = false;
  @Output() public openedSearch: any = new EventEmitter<boolean>();
  public opened: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
    if (window.matchMedia('(min-width: 600px)').matches) {
      this.openedSearch.emit(true);
    }
  }

  public changeValuesBurger(): void {
    this.openedBurger = !this.openedBurger;
    this.openedSearch.emit(false);
  }

  public changeValuesSearch(): void {
    this.opened = !this.opened;
    this.openedSearch.emit(this.opened);
    this.openedBurger = false;
  }

}
