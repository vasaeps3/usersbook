import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { AppRoutergModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutergModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
