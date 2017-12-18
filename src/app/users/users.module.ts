import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { UsersService } from "./users.service";
import { UserComponent } from "./user/user.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-lists.component";
import { UserDetailModalComponent } from "./user-detail-modal/user-detail-modal.component";
import { UsersListResolverService } from "./users-list/users-list-resolver.service";


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        UsersRoutingModule,
        FormsModule
    ],
    declarations: [
        UserComponent,
        UsersListComponent,
        UserDetailModalComponent
    ],
    providers: [
        UsersService,
        UsersListResolverService
    ]
})
export class UsersModule { }
