import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.css']
})
export class BurgerMenuComponent implements OnInit {
  @Input() public openedBurger: boolean;
  public links: Array<string> = ['My Acc', 'Bookmarks', 'Help', 'Log out'];

  public ngOnInit(): void {
  }

}
