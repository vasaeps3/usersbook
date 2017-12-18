import { Subject } from "rxjs/Subject";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { User } from "../../models/user.model";
import { UsersService } from "../users.service";
import { Observable } from "rxjs/Observable";


@Component({
    selector: "app-user-list",
    templateUrl: "./users-list.component.html",
    styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {

    public users: User[];
    public user$: Subject<User> = new Subject();

    public query$: Subject<string> = new Subject<string>();

    constructor(
        private router: Router,
        private userService: UsersService,
        private activatedRouter: ActivatedRoute,
    ) { }

    public ngOnInit() {
        this.activatedRouter.data.subscribe(
            data => {
                this.users = data["users"];
            }
        );
    }

    public showModal(user: User) {
        this.user$.next(user);
    }

}
