import { User } from "../_models/_user/user";
import "rxjs/add/operator/toPromise";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class UserService {
  private userUrl = "api/users";
  constructor(private http: Http) { }

  public getUser (id: number) {
    return this.http.get(this.userUrl + "/" + id).toPromise()
      .then((response) => response.json().data as User);
  }

  public getUsers () {
    return this.http.get(this.userUrl).toPromise()
      .then((response) => response.json().data as User[]);
      }
}
