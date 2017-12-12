import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { UserService } from "./user.service";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
