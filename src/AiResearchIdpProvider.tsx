import type { FC, PropsWithChildren } from "react";
import { authConfig, type Profile } from "./utils";
import { AuthProvider, useAuth } from "react-oidc-context";

const CheckLogin: FC<PropsWithChildren<{ Login: FC }>> = ({
  children,
  Login,
}) => {
  const auth = useAuth();
  const profile = auth.user?.profile as Profile | undefined;

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

    return children;
  }

  return <Login />;
};

interface Props {
  authority: string;
  client_id: string;
  Login: FC;
}
export const AiResearchIdpProvider: FC<PropsWithChildren<Props>> = ({
  children,
  Login,
  ...props
}) => {
  return (
    <AuthProvider {...{ ...authConfig, ...props }}>
      <CheckLogin Login={Login}>{children}</CheckLogin>
    </AuthProvider>
  );
};
