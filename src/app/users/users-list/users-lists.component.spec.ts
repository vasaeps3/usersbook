import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";

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
        expect(component).toBeDefined();
    });

    it("should NOT have users right after ngOnInit", () => {
        expect(component.users).toBeUndefined();
    });

    it("should assign users when route is resolved", () => {
        const activatedRoute: ActivatedRouteMock = TestBed.get(ActivatedRoute);
        activatedRoute.data = { users: fixtures.users };

        expect(component.users).toEqual(fixtures.users);
    });

    it("should delete query params if user is not found by query parameter 'userDetailId'", () => {
        const activatedRoute: ActivatedRouteMock = TestBed.get(ActivatedRoute);
        activatedRoute.data = { users: fixtures.users };

        const router: RouterStub = TestBed.get(Router);
        const navigateSpy: jasmine.Spy = spyOn(router, "navigate");

        // it sends a message to an observable with a knowingly incorrect ID
        const queryParams: Params = { userDetailId: -1 };
        activatedRoute.queryParams = queryParams;

        // it gets parameters from the method "navigate"
        const navigateArgs = navigateSpy.calls.first().args;

        expect(navigateArgs[1].queryParams).toBeUndefined();
    });

    it("should reflect user ID in the query parameter", () => {
        const router: RouterStub = TestBed.get(Router);
        const spy: jasmine.Spy = spyOn(router, "navigate");

        component.user$.next(fixtures.user);
        const navArgs = spy.calls.first().args;

        expect(navArgs[1].queryParams.userDetailId).toBe(fixtures.user.id);
    });

    it("should reflect user ID in the query parameter (null case)", () => {
        const router: RouterStub = TestBed.get(Router);
        const spy: jasmine.Spy = spyOn(router, "navigate");

        component.user$.next(null);
        const navigateArgs = spy.calls.first().args;

        expect(navigateArgs[1].queryParams).toBeUndefined();
    });

});
