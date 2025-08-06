export { AiResearchIdpProvider } from "./AiResearchIdpProvider";
export { signOutRedirect, type Profile } from "./utils";

// このパッケージを使う側で react-oidc-context から useAuth をインポートすると
// "AuthProvider の子コンポーネントで useAuth を使用する必要があります" というエラーが出るため
// useAuth を再エクスポートする。これで回避できる（ちょっと謎だが）
export { useAuth, type AuthContextProps } from "react-oidc-context";