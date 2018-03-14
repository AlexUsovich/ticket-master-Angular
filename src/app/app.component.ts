import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openedSearch: any;

  public openAddComponent(opened: any): any {
    this.openedSearch = opened;
  }

}
