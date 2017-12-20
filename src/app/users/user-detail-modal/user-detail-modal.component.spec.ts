import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";

import * as fixtures from "../../testing/fixture";
import { User } from "../../models/user.model";
import { UserDetailModalComponent } from "./user-detail-modal.component";


describe("UserDetailModalComponent", () => {

    let component: UserDetailModalComponent;
    let fixture: ComponentFixture<UserDetailModalComponent>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetailModalComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailModalComponent);
        component = fixture.componentInstance;
        component.user$ = new BehaviorSubject(null);
        fixture.detectChanges();
    });

    it("should modal window not be shown if the user is null", () => {
        component.user$.next(null);
        fixture.detectChanges();
        const modalElement: DebugElement = fixture.debugElement.query(By.css(".modal"));

        expect(modalElement).toBeNull();
    });

    it("should change user when I emit user", () => {
        component.user = null;
        component.user$.next(fixtures.user);

        expect(component.user).toBe(fixtures.user);
    });

    it("should modal window be shown if the user is not null", () => {
        component.user$.next(fixtures.user);
        fixture.detectChanges();
        const modalElement: DebugElement = fixture.debugElement.query(By.css(".modal"));

        expect(modalElement).not.toBeNull();
    });

    it("should display button 'Close' if modal is shown", () => {
        component.user$.next(fixtures.user);
        fixture.detectChanges();
        const buttonClose: DebugElement = fixture.debugElement.query(By.css(".modal-footer button"));

        expect(buttonClose).not.toBeNull();
    });

    it("should make user null when I click close", () => {
        component.user$.next(fixtures.user);
        fixture.detectChanges();
        const buttonClose = fixture.debugElement.query(By.css(".modal-footer button"));
        buttonClose.triggerEventHandler("click", null);

        expect(component.user).toBeNull();
    });

});
