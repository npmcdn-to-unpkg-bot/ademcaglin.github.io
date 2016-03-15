import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  public title = 'Tour of Heroes';
}
