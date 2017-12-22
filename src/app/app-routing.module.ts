import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageErrorComponent } from "./common-components/page-error/page-error.component";
import { PageNotFoundComponent } from "./common-components/page-not-found/page-not-found.component";


const routes: Routes = [
    { path: "", loadChildren: "./users/users.module#UsersModule" },
    { path: "error", component: PageErrorComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutergModule { }
