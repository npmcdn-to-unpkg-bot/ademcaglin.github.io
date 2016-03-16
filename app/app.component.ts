import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './about.component';

@Component({
  selector: 'my-resume',
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
