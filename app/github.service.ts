import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {GithubUser} from './githubuser';
import {Observable}  from 'rxjs/Observable';
import {AVATAR_URL}  from './config';

@Injectable()
export class GithubService {
  constructor (private http: Http) {}

  private _githubUrl = AVATAR_URL + 'ademcaglin';

  getUser () {
    return this.http.get(this._githubUrl)
                    .map(res => <GithubUser> res.json())
                    .do(data => console.log(data))
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}