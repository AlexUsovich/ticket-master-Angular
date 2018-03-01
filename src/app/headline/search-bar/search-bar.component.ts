import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() public openedSearch: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public closeOpen(): void {
    this.openedSearch === true ? this.openedSearch = false : this.openedSearch = true;
  }

}
