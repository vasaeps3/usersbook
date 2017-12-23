import { By } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";

import { AppComponent } from "./app.component";


describe("AppComponent", () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes([])],
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should have a router outlet", () => {
        const routerOutletElement = fixture.debugElement.query(By.directive(RouterOutlet));

        expect(routerOutletElement).not.toBeNull();
    });

});
