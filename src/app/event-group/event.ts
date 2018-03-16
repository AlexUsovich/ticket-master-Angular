export class Event {
  public image: string;
  public title: string;
  public venues: string;
  public description: string;
  public classifications: string;
  public date: string;
  public day: string;
  public time: string;
  public month: any;

  public constructor(data: any) {
    this.image = data.images[0].url;
    this.title = data.name;
    this.venues = `${data._embedded.venues[0].name}in${data._embedded.venues[0].city.name}`;
    this.description = data.info;
    if ((data._embedded.venues[0].name) && (data._embedded.venues[0].city.name)) {
      this.venues = `${data._embedded.venues[0].name}in${data._embedded.venues[0].city.name}`;
    }
    this.description = data.info;
    if ((data.classifications) && (data.classifications[0].subGenre.name)) {
      this.classifications = `${data.classifications[0].genre.name}/${data.classifications[0].subGenre.name}`;
    }
    if (data.dates.start.localDate) {
      this.date = data.dates.start.localDate;
      this.day = data.dates.start.localDate.substr(8, 2);
    }
    if (data.dates.start.localTime) { this.time =  ` at ${data.dates.start.localTime.substr(0, 5)}`; }
    enum mS {'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'}
    this.month = mS[data.dates.start.localDate.substr(5, 2) - 1];
  }

}
