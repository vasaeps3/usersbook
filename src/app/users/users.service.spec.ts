import { HttpClient } from "@angular/common/http";
import { TestBed, inject } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import * as fixtures from "../testing/fixture";
import { UsersService } from "./users.service";


describe("UsersService", () => {

    const BASE_URL = "http://jsonplaceholder.typicode.com";

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UsersService]
        });
    });

    it("should service method return the correct data", () => {
        const userService: UsersService = TestBed.get(UsersService);
        const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
        userService
            .getAllUsers()
            .subscribe(users => {
                expect(users).toBeDefined();
                expect(users.length).toBe(2);
                expect(users).toEqual(fixtures.users);
            });

        const request = httpMock.expectOne(`${BASE_URL}/users`);
        expect(request.request.method).toEqual("GET");
        request.flush(fixtures.users);
        httpMock.verify();
    });

});
