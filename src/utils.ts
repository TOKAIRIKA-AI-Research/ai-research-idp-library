import type { CognitoIdTokenPayload } from "aws-jwt-verify/jwt-model";
import type { IdTokenClaims } from "oidc-client-ts";
import type { AuthProviderProps } from "react-oidc-context";

export type Profile = IdTokenClaims & CognitoIdTokenPayload

export const authConfig: AuthProviderProps = {
  authority: "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_Rjm3JZLVe",
  client_id: "1kqvas11ce10tiefm1qvlp03tq",
  redirect_uri: window.location.origin,
  response_type: "code",
  scope: [
    // "phone",
    // "email",
    "openid",
    // "aws.cognito.signin.user.admin",
    "profile",
  ].join(" "),
  extraQueryParams: { lang: "ja" },
  onSigninCallback: () => window.history.replaceState({}, document.title, window.location.pathname),
};

export function signOutRedirect(cognitoDomain: string, clientId: string) {
  const logoutUri = window.location.origin;
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
    logoutUri
  )}`;
};