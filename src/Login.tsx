import type { FC } from "react";
import { useAuth } from "react-oidc-context";
import { signOutRedirect } from "./utils";

export const Login: FC = () => {
  const auth = useAuth();

  const handleSignOut = () => {
    // auth.removeUser();
    signOutRedirect(); // こちらも呼び出すとSignin時にパスワードを求められる
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};
