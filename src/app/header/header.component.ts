import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
