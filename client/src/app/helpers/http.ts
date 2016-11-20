import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    if (localStorage.getItem("auth") !== null) {
      var auth = localStorage.getItem("auth");
      var token = "JWT " + auth;
    }
    headers.append('Authorization', token);
  }

  get(url) {
    url = API_URL + url;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    url = API_URL + url;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, options);
  }
}
