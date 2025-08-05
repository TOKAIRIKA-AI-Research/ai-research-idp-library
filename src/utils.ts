import type { CognitoIdTokenPayload } from "aws-jwt-verify/jwt-model";
import type { IdTokenClaims } from "oidc-client-ts";
import type { AuthProviderProps } from "react-oidc-context";

export type Profile = IdTokenClaims & CognitoIdTokenPayload

if (import.meta.env.PROD) {
  if (!import.meta.env.VITE_COGNITO_AUTHORITY) {
    throw new Error("VITE_COGNITO_AUTHORITY environment variable is not set");
  }
  if (!import.meta.env.VITE_COGNITO_CLIENT_ID) {
    throw new Error("VITE_COGNITO_CLIENT_ID environment variable is not set");
  }
  if (!import.meta.env.VITE_COGNITO_DOMAIN) {
    throw new Error("VITE_COGNITO_DOMAIN environment variable is not set");
  }
}

export const authConfig: AuthProviderProps = {
  // authority,
  // client_id: clientId,
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