import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private baseUrl: string = 'https://api.github.com/';
  private usersUrl: string = this.baseUrl + 'search/users';
  private authParams: URLSearchParams = new URLSearchParams();
  
  constructor(private http: Http) {
      this.authParams.set('client_id', '3150391d173000cae80a');
      this.authParams.set('client_secret', '421c435e2d283daed854e0dd47bf1b32b860e807');
  }

  getUsers(username: string) {
      return this.http.get(this.usersUrl + '?q=' + username, {search: this.authParams})
                      .map(res => res.json());
  }

}
