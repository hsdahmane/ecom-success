import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {


  constructor(private oauthService: OAuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this.oauthService.getAccessToken();

    req = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + accessToken)
    });

    return next.handle(req);
  }


}
