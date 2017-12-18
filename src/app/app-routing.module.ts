import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./common-components/page-not-found/page-not-found.component";


const routes: Routes = [
    {
        path: "", loadChildren: "./users/users.module#UsersModule"
    },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutergModule { }
