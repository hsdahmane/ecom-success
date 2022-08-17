import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://localhost:10001/auth/realms/master',
  redirectUri: window.location.origin,
  clientId: 'ecom-success',
  responseType: 'code'
};
