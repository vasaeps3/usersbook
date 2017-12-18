import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersListComponent } from "./users-list/users-lists.component";
import { UsersListResolverService } from "./users-list/users-list-resolver.service";


const routes: Routes = [
    {
        path: "",
        component: UsersListComponent,
        resolve: { users: UsersListResolverService }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
