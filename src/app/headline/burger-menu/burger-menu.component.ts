import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {
  public opened: any = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public closeOpen(): void {
    if (this.opened === false) {
      this.opened = true;
    } else {
      this.opened = false;
    }
  }

}
