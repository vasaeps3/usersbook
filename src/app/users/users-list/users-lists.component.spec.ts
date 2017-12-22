import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";

import * as fixtures from "../../testing/fixture";
import { RouterStub } from "../../testing/router-stub";
import { UsersListComponent } from "./users-lists.component";
import { ActivatedRouteMock } from "../../testing/activated-route-mock";


describe("UsersListComponent", () => {

    let component: UsersListComponent;
    let fixture: ComponentFixture<UsersListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UsersListComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: ActivatedRoute, useClass: ActivatedRouteMock }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should created the component", () => {
        expect(component).toBeTruthy();
    });

    it("should NOT have users immediately after ngOnInit", () => {
        expect(component.users).toBeUndefined();
    });

    it("should assign users when route is resolved", () => {
        const activatedRoute: ActivatedRouteMock = TestBed.get(ActivatedRoute);
        activatedRoute.data = { users: fixtures.users };

        expect(component.users).toEqual(fixtures.users);
    });

    it("should not have a detailed user when there is no query parameter 'userDetailId'", () => {
        expect(component.userDetailId).toBeUndefined();
    });

    it("should redirect to the router without parameters when the user is not found by query parameter 'userDetailId'", () => {
        // resolves users to search for
        const activatedRoute: ActivatedRouteMock = TestBed.get(ActivatedRoute);
        activatedRoute.data = { users: fixtures.users };

        const router: RouterStub = TestBed.get(Router);
        const spy = spyOn(router, "navigate");

        // sending a message to an observable with a knowingly incorrect ID
        const userDetailId = { userDetailId: -1 };
        activatedRoute.queryParams = userDetailId;

        // get parameters from the method "navigate"
        const navArgs = spy.calls.first().args;

        // queryParams should be undefined
        expect(navArgs[1].queryParams).toBeUndefined();
    });

    it("should have a user ID in the query parameter, when geting the user from outside", () => {
        const router: RouterStub = TestBed.get(Router);
        const spy = spyOn(router, "navigate");

        component.user$.next(fixtures.user);
        const navArgs = spy.calls.first().args;

        expect(navArgs[1].queryParams.userDetailId).toBe(fixtures.user.id);
    });

    it("should not have a query parameter, when geting null instead of the user from outside", () => {
        const router: RouterStub = TestBed.get(Router);
        const spy = spyOn(router, "navigate");

        component.user$.next(null);
        const navArgs = spy.calls.first().args;

        expect(navArgs[1].queryParams).toBeUndefined();
    });

});
