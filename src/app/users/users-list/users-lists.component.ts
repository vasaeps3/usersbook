import * as _ from "lodash";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ActivatedRoute, NavigationExtras, Router, Params } from "@angular/router";

import { User } from "../../models/user.model";


@Component({
    selector: "app-user-list",
    templateUrl: "./users-list.component.html",
    styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {

    public users: User[];
    public user$: BehaviorSubject<User> = new BehaviorSubject(null);

    private userDetailId: number;

    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute,
    ) { }

    public ngOnInit() {
        this.activatedRouter.data.subscribe(resolvedData => {
            this.users = resolvedData["users"];
        });

        this.activatedRouter.queryParams.subscribe((queryParams: Params) => {
            this.userDetailId = +queryParams["userDetailId"] || null;
            const userDetail = _.find(this.users, user => user.id === this.userDetailId);

            if (!userDetail) {
                this.userDetailId = null;
            }

            this.user$.next(userDetail);
        });

        this.user$.subscribe((user: User) => {
            this.setQueryParam(user);
        });

    }

    public setQueryParam(user: User) {
        const extras: NavigationExtras = { relativeTo: this.activatedRouter };

        if (user) {
            extras.queryParams = { userDetailId: user.id };
        }

        this.router.navigate(["./"], extras);
    }

}
