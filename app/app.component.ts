import {Component} from 'angular2/core';
import {AboutComponent} from './about.component';

@Component({
  selector: 'my-resume',
  templateUrl: 'app/app.component.html',
  directives: [AboutComponent]
})
export class AppComponent { }
