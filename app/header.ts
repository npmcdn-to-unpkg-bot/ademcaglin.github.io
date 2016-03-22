import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {GithubUser} from './githubuser';
import {GithubService} from './github.service';
import {AuthService} from './auth.service';

@Component({
  selector: 'header',
  templateUrl:'app/header.html',
  providers: [
    HTTP_PROVIDERS,
    GithubService,
    AuthService]
})

export class HeaderComponent implements OnInit{
  constructor (private _githubService: GithubService, private _authService: AuthService) {}

  errorMessage: string;
  avatar_url: string;
  fullname:string;

  ngOnInit() { this.getUser(); }

  getUser() {
    this._githubService.getUser()
                     .subscribe(
                       user => {
                         this.avatar_url = user.avatar_url,
                         this.fullname = user.login
                       },
                       error =>  this.errorMessage = <any>error);
  }
  
  signInWithGithub(): void {
    this._authService.signInWithGithub()
      .then(() => this.postSignIn());
  }
  
  private postSignIn(): void {
    
  }

}
