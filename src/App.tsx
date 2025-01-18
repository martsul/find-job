import { Layout } from "./components/layout/layout";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { AuthorizationContextProvider } from "./components/authorization-context/authorization-context";
// import { MainPage } from "./pages/main/main-page";
import { FindJobPage } from "./pages/main/find-job-page";

export const App = () => {
  return (
    <AuthorizationContextProvider>
      <Layout>
        <FindJobPage />
      </Layout>
    </AuthorizationContextProvider>
  );
};
