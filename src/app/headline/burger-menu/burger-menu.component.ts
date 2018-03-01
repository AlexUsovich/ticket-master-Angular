import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {
  @Input() public openedBurger: boolean = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public closeOpen(): void {
    this.openedBurger === true ? this.openedBurger = false : this.openedBurger = true;
  }

}
