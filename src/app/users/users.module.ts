import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersService } from "./users.service";
import { UserComponent } from "./user/user.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-lists.component";
import { UserDetailModalComponent } from "./user-detail-modal/user-detail-modal.component";
import { UsersListResolverService } from "./users-list/users-list-resolver.service";


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule
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
