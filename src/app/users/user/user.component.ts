import { Subject } from "rxjs/Subject";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { User } from "../../models/user.model";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
    @Input() user: User;
    @Output() selected = new EventEmitter<User>();

    ngOnInit(): void {
        console.log("UserComponent load!");
    }

    public select() {
        this.selected.emit(this.user);
    }

}
