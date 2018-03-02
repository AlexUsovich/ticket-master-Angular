import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() public data: any;
  public image: string;
  public title: string;
  public venues: string;
  public description: string;
  public classifications: string;
  public date: string;
  public day: string;
  public time: string;
  public month: any;

  public constructor() {
  }

  public ngOnInit(): void {
    if ( this.data ) {
      this.image = this.data.images[0].url;
      this.title = this.data.name;
      this.venues = `${this.data._embedded.venues[0].name}in${this.data._embedded.venues[0].city.name}`;
      this.description = this.data.info;
      this.classifications = `${this.data.classifications[0].genre.name}/${this.data.classifications[0].subGenre.name}`;
      this.date = this.data.dates.start.localDate;
      this.day = this.data.dates.start.localDate.substr(8, 2);
      this.time = this.data.dates.start.localTime.substr(0, 5);
      enum mS {'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'}
      this.month = mS[this.data.dates.start.localDate.substr(5, 2) - 1];
    }
  }

  openOneEvent(){

  }

}
