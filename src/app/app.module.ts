import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {FeaturesModule} from "./features/features.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpRequestInterceptor} from "./core/interceptors/http.request.interceptor";
import {OAuthModule} from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    FeaturesModule,
    AppRoutingModule,
    OAuthModule.forRoot({resourceServer: {allowedUrls: ['/product-api', '/order-api'], sendAccessToken: true}})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
