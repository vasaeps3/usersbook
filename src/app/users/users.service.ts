import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import { User } from "../models/user.model";


@Injectable()
export class UsersService {
    private static readonly BASE_URL = "http://jsonplaceholder.typicode.com";

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getAllUsers(): Observable<User[]> {
        // TODO error
        return <Observable<User[]>>this._httpClient.get(`${UsersService.BASE_URL}/users`);
    }

}
