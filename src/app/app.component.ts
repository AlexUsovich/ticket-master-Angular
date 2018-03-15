import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openedSearch: any;
  public active: boolean = true;

  public ngOnInit(): void {
    window.onload = () => {
      this.active = false;
    };
  }

  public openAddComponent(opened: any): any {
    this.openedSearch = opened;
  }

}
