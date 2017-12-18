import { Subject } from "rxjs/Subject";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input, Renderer2 } from "@angular/core";

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
        private renderer: Renderer2
    ) { }

    public ngOnInit(): void {
        this.user$.subscribe((user: User) => {
            this.renderer.addClass(document.body, "modal-open");
            this.user = user;
        });
    }

    public close() {
        this.user$.next(null);
        this.renderer.removeClass(document.body, "modal-open");
    }

}
