import type { FC, PropsWithChildren } from "react";
import { useAuth, AuthProvider } from "react-oidc-context";
import { authConfig, type Profile } from "./utils";

const CheckLogin: FC = () => {
  const auth = useAuth();
  const profile = auth.user?.profile as Profile | undefined;

  const handleSignOut = () => {
    auth.removeUser();
  };

  const testRequest = async () => {
    const response = await fetch("/api/userinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.user?.access_token}`,
      },
    });

    console.log(response);
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    if (!profile?.["cognito:groups"]?.includes("Sample-Client")) {
      return (
        <div>
          <p>No project permission</p>
          <button onClick={() => auth.removeUser()}>Sign out</button>
        </div>
      );
    }

    return (
      <div>
        <pre>
          Hello: {profile?.family_name} {profile?.given_name} {profile?.email}
        </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button onClick={testRequest}>test request</button>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

interface Props {
  authority: string;
  client_id: string;
}
export const AiResearchIdpProvider: FC<PropsWithChildren<Props>> = ({
  ...props
}) => {
  return (
    <AuthProvider {...{ ...authConfig, ...props }}>
      <CheckLogin />
    </AuthProvider>
  );
};
