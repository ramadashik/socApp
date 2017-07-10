import { User } from "./user";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private usersUrl = "api/users";
  constructor (private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }
    private handleError(error: any): Promise<any> {
      console.error("An error occured", error);
      return Promise.reject(error.message || error);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }
}
