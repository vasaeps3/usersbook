import { By } from "@angular/platform-browser";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";

import { User } from "../../models/user.model";
import { UserComponent } from "./user.component";


describe("UserComponent", () => {

    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    const expectedUser: User = {
        id: 1,
        name: "expectedUser",
        username: "Expected User",
        email: "expectedUser@google.com",
        phone: "+123(32)111-23-21"
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        component.user = expectedUser;
        fixture.detectChanges();
    });

    it("should raise selected event when clicked", () => {
        let selectedUser: User;
        component.selected.subscribe((user: User) => { selectedUser = user; });
        const buttonSelect: DebugElement = fixture.debugElement.query(By.css("button"));
        buttonSelect.triggerEventHandler("click", null);

        expect(selectedUser).toBe(expectedUser);
    });

});
