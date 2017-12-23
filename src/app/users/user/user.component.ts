import { ActivatedRoute } from "@angular/router";
import { Component, Input, EventEmitter, Output } from "@angular/core";

import { User } from "../../models/user.model";


@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})
export class UserComponent {
    @Input() public user: User;
    @Output() public selected = new EventEmitter<User>();

    public select() {
        this.selected.emit(this.user);
    }

}
