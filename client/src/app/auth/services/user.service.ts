import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {User} from "../models/User";
import {Headers, RequestOptions} from '@angular/http';
import {HttpClient} from "../../helpers/http"
@Injectable()
export class UserService {
  private usersUrl = 'user';  // URL to web API
  constructor(private http: HttpClient) {
  }


  createUsers(user): Promise<User[]> {
    return this.http.post(this.usersUrl, user)
      .toPromise()
      .then(data => {
        return data.json();
        // this.get_user_api();
      })
      .catch(this.handleError);
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
