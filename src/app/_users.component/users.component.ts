import { Component } from "@angular/core";
import { User } from "../_models/_user/user";
import { UserService } from "../_services/http.service";

@Component({
  selector: "users-comp",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {
  private users: User[] = [];

  constructor(private userService: UserService) {
    this.getUsers();
  }
  private getUsers() {
    return this.userService.getUsers()
      .then((users) => {
        for (let index in users) {
          this.users[index] = users[index];
        }
      });
  }

}
