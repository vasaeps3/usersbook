import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common-components/header/header.component";
import { AppRoutingModule } from "./app-routing.module";
import { TimingInterceptor } from "./interceptors/timing-interceptor.service";
import { PageErrorComponent } from "./common-components/page-error/page-error.component";
import { PageNotFoundComponent } from "./common-components/page-not-found/page-not-found.component";
import { HttpInterceptorService } from "./interceptors/http-interceptor.service";


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        PageErrorComponent,
        PageNotFoundComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TimingInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
