import { By } from "@angular/platform-browser";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";

import * as fixtures from "../../testing/fixture";
import { User } from "../../models/user.model";
import { UserComponent } from "./user.component";


describe("UserComponent", () => {

    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        component.user = fixtures.user;
        fixture.detectChanges();
    });

    it("should raise selected event when clicked", () => {
        let selectedUser: User;
        component.selected.subscribe((user: User) => { selectedUser = user; });
        const buttonSelect: DebugElement = fixture.debugElement.query(By.css("button"));
        buttonSelect.triggerEventHandler("click", null);

        expect(selectedUser).toBe(fixtures.user);
    });

});
