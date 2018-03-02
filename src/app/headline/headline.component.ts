import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  public openedBurger: boolean = false;
  public openedSearch: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public changeValuesBurger(): void {
    if (this.openedBurger === true) {
      this.openedBurger = false;
    } else {
      this.openedBurger = true;
      this.openedSearch = false;
    }
  }

  public changeValuesSearch(): void {
    if (this.openedSearch === true) {
      this.openedSearch = false;
    } else {
      this.openedSearch = true;
      this.openedBurger = false;
    }
  }

}
