import { Component, OnInit } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from 'src/app/sso.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private oauthService:OAuthService) { 
    this.configuresingleSignon();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  configuresingleSignon(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler= new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

  }
  
  login(){
   this.oauthService.initImplicitFlow()
  }

  logout() {
    this.oauthService.logOut();
  }

  get token(){

    let claims:any=this.oauthService.getIdentityClaims()
    return claims ? claims: null
  }
}
