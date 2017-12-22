import { Router } from "@angular/router";
import { TestBed } from "@angular/core/testing";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { HttpInterceptorService } from "./http-interceptor.service";
import { RouterStub } from "../testing/router-stub";


describe("HttpInterceptorService", () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HttpInterceptorService,
                    multi: true
                },
                { provide: Router, useClass: RouterStub }
            ]
        });
    });

    it("should have test data in the response http", () => {
        const responseTest = { message: "Have a good response" };
        const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
        const httpClient: HttpClient = TestBed.get(HttpClient);

        httpClient.get("/").subscribe(resonse => {
            expect(resonse).toEqual(responseTest);
        });
        const request = httpMock.expectOne("/");

        request.flush(responseTest);
        httpMock.verify();
    });

    it("should redirect to error page when the query error", () => {
        const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
        const httpClient: HttpClient = TestBed.get(HttpClient);
        const router: RouterStub = TestBed.get(Router);
        const spy = spyOn(router, "navigate");

        httpClient.get("/").subscribe();

        const request = httpMock.expectOne("/");

        request.flush({ errorMessage: "Uh oh!" }, { status: 500, statusText: "Server Error" });
        httpMock.verify();

        expect(spy).toHaveBeenCalledWith(["/error"]);
    });

});
