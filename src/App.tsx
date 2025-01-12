import { Layout } from "./components/layout/layout";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { AuthorizationContextProvider } from "./components/authorization-context/authorization-context";

export const App = () => {
  return (
    <AuthorizationContextProvider>
      <Layout />
    </AuthorizationContextProvider>
  );
};
