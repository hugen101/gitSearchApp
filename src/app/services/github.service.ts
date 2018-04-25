import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private _userName: string;
  private _clientId: '2399e150671ccb10271b';
  private _clientSecret: 'b4d75b71d5b81d5795a4827ef0f0034e7f173b3c';

  constructor(private _http: Http) { 
    console.log('github service ready..');
    this._userName='mghugen';

  }

  updateUser(username:string){
    this._userName = username;
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'
    +this._userName+'?_clientId='+this._clientId+
    '&_clientSecret='+this._clientSecret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'
    +this._userName+'/repos?_clientId='+this._clientId+
    '&_clientSecret='+this._clientSecret)
      .map(res => res.json());
  }

}
