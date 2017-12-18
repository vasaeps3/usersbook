import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common-components/header/header.component";
import { AppRoutergModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./common-components/page-not-found/page-not-found.component";
import { TimingInterceptor } from "./interceptors/timing-interceptor.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutergModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
