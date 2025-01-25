import { Layout } from "./components/layout/layout";
import "./reset.css";
import "./fonts.css";
import "./root.css";
// import { MainPage } from "./pages/main/main-page";
import { FindJobPage } from "./pages/main/find-job-page";
import { AuthorizationContextProvider } from "./components/context/authorization-context/authorization-context";
import { FiltersContextProvider } from "./components/context/filters-context/filters-context";

export const App = () => {
  return (
    <FiltersContextProvider>
      <AuthorizationContextProvider>
        <Layout>
          <FindJobPage />
        </Layout>
      </AuthorizationContextProvider>
    </FiltersContextProvider>
  );
};
