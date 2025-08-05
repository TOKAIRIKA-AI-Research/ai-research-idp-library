import type { CognitoIdTokenPayload } from "aws-jwt-verify/jwt-model";
import type { IdTokenClaims } from "oidc-client-ts";
import type { AuthProviderProps } from "react-oidc-context";
export type Profile = IdTokenClaims & CognitoIdTokenPayload;
export declare const authConfig: AuthProviderProps;
export declare function signOutRedirect(): void;
//# sourceMappingURL=utils.d.ts.map