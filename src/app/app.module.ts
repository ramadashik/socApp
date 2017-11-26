import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent }  from "./app.component";

import { AppRoutingModule } from  "./app-routing.module";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./_in-memory-database/in-memory-database";
import { UserComponent } from "./_user.component/user.component";
import { UserService } from "./_services/http.service";
import {UsersComponent} from "./_users.component/users.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ AppComponent, UserComponent, UsersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserService]
})
export class AppModule { }
