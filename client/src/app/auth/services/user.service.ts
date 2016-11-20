import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {User} from "../models/User";
import {Headers, RequestOptions} from '@angular/http';
import {HttpClient} from "../../helpers/http"
import {JwtHelper} from "angular2-jwt/angular2-jwt";
@Injectable()
export class UserService {
  private usersUrl = 'user';  // URL to web API
  jwtHelper: JwtHelper = new JwtHelper();
  user: User;
  is_logged_in = false;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('id_token') !== null && localStorage.getItem('id_token') !== "false") {
      this.set_token(localStorage.getItem('id_token'));
      // this.get_user_api();
    }
  }

  private set_token(token) {
    if (token !== false) {
      this.user = this.jwtHelper.decodeToken(token);
      this.is_logged_in = true;
    }
    localStorage.setItem('id_token', token);
  }

  createUsers(user): Promise<User> {
    return this.http.post(this.usersUrl, user)
      .toPromise()
      .then(data => {
        // user = data.json();
        console.log(user.username)
        return this.login(user.username, user.password);
        // this.get_user_api();
      })
      .catch(this.handleError);
  }

  login(username, password): Promise<User> {
    return this.http.post('api-token-auth/', {username, password})
      .toPromise()
      .then(data => {
        this.set_token(data.json().token);
        return true;
      })
      .catch(this.handleError);

  }

  logout() {
    localStorage.removeItem('id_token');
    this.set_token(false);
    this.user = {};
    this.is_logged_in = false;
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(data => {
        return data.json();
        // this.get_user_api();
      })
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
