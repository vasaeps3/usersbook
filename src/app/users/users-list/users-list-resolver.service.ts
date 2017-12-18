import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { User } from "../../models/user.model";
import { UsersService } from "../users.service";


@Injectable()
export class UsersListResolverService implements Resolve<User[]> {

    constructor(
        private userService: UsersService
    ) { }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {

        return this.userService.getAllUsers();
    }

}
