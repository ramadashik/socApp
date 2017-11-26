import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./_user.component/user.component";
import {UsersComponent} from "./_users.component/users.component";

const routes: Routes = [
  { path: "", redirectTo: "user/:id"},
  { path: "user/:id", component: UserComponent},
  { path: "users", component: UsersComponent},
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
