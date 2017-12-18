import { Subject } from "rxjs/Subject";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";

import { User } from "../../models/user.model";


@Component({
    selector: "app-user-detail-modal",
    templateUrl: "./user-detail-modal.component.html",
    styleUrls: ["./user-detail-modal.component.scss"]
})
export class UserDetailModalComponent implements OnInit {
    @Input() user$: Subject<User>;

    public user: User;

    constructor(
    ) { }

    public ngOnInit(): void {
        this.user$.subscribe((user: User) => {
            this.user = user;
        });
    }

    public close() {
        this.user$.next(null);
    }

}
