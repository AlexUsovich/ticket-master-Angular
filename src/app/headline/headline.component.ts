import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  public openedBurger: boolean = false;
  public openedAdd: boolean = false;
  @Output() public openedSearch: any = new EventEmitter<boolean>();

  public constructor() { }

  public ngOnInit(): void {
    if (window.matchMedia('(min-width: 600px)').matches) {
      this.openedSearch.emit(true);
    }
  }

  public changeValuesBurger(): void {
    this.openedBurger = !this.openedBurger;
    this.openedAdd = false;
    this.openedSearch.emit(this.openedAdd);
  }

  public openAddComponent(opened: boolean): any {
    if (opened) {this.openedBurger = false; }
    this.openedSearch.emit(opened);
  }

}
