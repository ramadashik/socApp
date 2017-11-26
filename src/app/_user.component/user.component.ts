import { Component } from "@angular/core";
import { User } from "../_models/_user/user";
import { UserService } from "../_services/http.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "user-comp",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.css"]
})
export class UserComponent {
  private user: User;
  public userId: number;


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {}


  private getUser(id: number) {
    return this.userService.getUser(id)
      .then((user) => {
        this.user = user;
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params, ) => {
      this.userId = params["id"] === undefined ? 1 : params["id"];
    });
    this.getUser(this.userId);
  }
}
