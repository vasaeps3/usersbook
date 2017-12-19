import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent (inline template)", () => {

    let comp: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css("span i"));
        el = de.nativeElement;

    }));

    it("should display original text logo", () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.textLogo);
    });

    it("should display a different test title", () => {
        comp.textLogo = "Test text logo";
        fixture.detectChanges();
        expect(el.textContent).toContain("Test text logo");
    });

});
