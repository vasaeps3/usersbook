import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { User } from "../models/user.model";
import { UserService } from "./user.service";


@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {

    public users: User[];

    constructor(
        private _route: ActivatedRoute,
        private _userService: UserService
    ) { }

    public ngOnInit() {
        this._userService.getAllUsers()
            .subscribe(
                a => { this.setUser(a); }
            );
    }

    public setUser(users) {
        this.users = users;
    }

}
