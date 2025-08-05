import type { FC, PropsWithChildren } from "react";
import { useAuth, AuthProvider } from "react-oidc-context";
import { authConfig, type Profile } from "./utils";
import { Login } from "./Login";

const CheckLogin: FC<PropsWithChildren>  = ({ children }) => {
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
      return <div>
        <p>No project permission</p>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>;
    }

    return children; 
  }
  
  return (
    <Login />
  );
}

interface Props{
  authority: string;
  clientId: string;
}
export const AiResearchIdpProvider: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <AuthProvider {...{authConfig, ...props}}>
      <CheckLogin>
      {children}
      </CheckLogin>
    </AuthProvider>
  )
}