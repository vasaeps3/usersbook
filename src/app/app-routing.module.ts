import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserComponent } from "./users/user.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes: Routes = [
    {
        path: "", loadChildren: "./users/user.module#UserModule"
    },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutergModule { }
