import {HttpClient} from 'aurelia-http-client';

export class Flickr {
  static inject() {
    return [HttpClient];
  }

  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
  constructor(http) {
    this.heading = 'Flickr';
    this.images = [];
    this.http = http;
  }

  activate() {
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}

