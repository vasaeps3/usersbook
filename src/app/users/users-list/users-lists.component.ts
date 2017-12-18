import _ from "lodash";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

import { User } from "../../models/user.model";
import { UsersService } from "../users.service";


@Component({
    selector: "app-user-list",
    templateUrl: "./users-list.component.html",
    styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {

    public users: User[];
    public user$: BehaviorSubject<User> = new BehaviorSubject(null);

    public userDetailId: number;

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

        this.activatedRouter.queryParams.subscribe(
            queryParams => {
                this.userDetailId = +queryParams["userDetailId"] || null;
                if (this.userDetailId) {
                    const userDetail = _.find(this.users, u => u.id === this.userDetailId) || null;
                    if (userDetail) {
                        this.user$.next(userDetail);
                    }
                }
            }
        );

        this.user$.subscribe((user: User) => {
            if (!user) {
                this.showModal(null);
            }
        });

    }

    public showModal(user: User) {
        const extras: NavigationExtras = { relativeTo: this.activatedRouter };
        if (user) {
            extras.queryParams = { userDetailId: user.id };
        }
        this.router.navigate(["./"], extras);
    }

}
