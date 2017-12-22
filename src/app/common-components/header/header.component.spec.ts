import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "./header.component";


describe("HeaderComponent", () => {

    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let textLogoElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HeaderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        textLogoElement = fixture.debugElement.query(By.css("span i")).nativeElement;
    });

    it("should display original text logo", () => {
        expect(textLogoElement.textContent).toContain(component.textLogo);
    });

    it("should display a different text logo", () => {
        const textLogoTest = "Test text logo";
        component.textLogo = textLogoTest;
        fixture.detectChanges();

        expect(textLogoElement.textContent).toContain(textLogoTest);
    });

});
