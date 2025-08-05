import type { FC, PropsWithChildren } from "react";
import { authConfig, type Profile } from "./utils";
import { AuthProvider, useAuth } from "react-oidc-context";

const CheckLogin: FC<
  PropsWithChildren<{ Login: FC; cognitoGroupName?: string }>
> = ({ children, Login, cognitoGroupName }) => {
  const auth = useAuth();
  const profile = auth.user?.profile as Profile | undefined;

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    if (
      cognitoGroupName !== undefined &&
      !profile?.["cognito:groups"]?.includes(cognitoGroupName)
    ) {
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
  Login: FC;
  cognitoGroupName?: string;
  authority: string;
  client_id: string;
}
export const AiResearchIdpProvider: FC<PropsWithChildren<Props>> = ({
  children,
  Login,
  cognitoGroupName,
  ...props
}) => {
  return (
    <AuthProvider {...{ ...authConfig, ...props }}>
      <CheckLogin Login={Login} cognitoGroupName={cognitoGroupName}>
        {children}
      </CheckLogin>
    </AuthProvider>
  );
};
