import {Component, OnInit} from "@angular/core";
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./auth.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ecom-success';


  constructor(private oauthService: OAuthService) {

  }

  ngOnInit(): void {
    // this.oauthService.configure(authCodeFlowConfig);
    // this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
