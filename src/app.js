import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  // static inject() {
  //   return [Router];
  // }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'A Aurelia App';
      config.map([{
        route: ['', 'welcome'],
        moduleId: 'sample/welcome',
        nav: true,
        title: '欢迎'
      }, {
        route: 'flickr',
        moduleId: 'sample/flickr',
        nav: true
      }]);
    });
  }
}
