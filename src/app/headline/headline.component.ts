import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  public burgerMenu: any;
  public searchMenu: any;

  public constructor() { }

  public ngOnInit(): void {
    this.changeValues();
  }

  public changeValues(): void {

  }

}
