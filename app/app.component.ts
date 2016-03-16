import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-resume',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  public title = 'Tour of Heroes';
}
