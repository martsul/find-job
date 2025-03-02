import { Layout } from "./components/layout/layout";
import "./reset.css";
import "./fonts.css";
import "./root.css";
import { MainPage } from "./pages/main/main-page";
import { FindJobPage } from "./pages/find-job/find-job-page";
import { AuthorizationContextProvider } from "./components/context/authorization-context/authorization-context";
import { FiltersContextProvider } from "./components/context/filters-context/filters-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout thereIsFooter={false} />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "employers", element: <FindJobPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <FiltersContextProvider>
        <AuthorizationContextProvider>
          <RouterProvider router={router} />
        </AuthorizationContextProvider>
      </FiltersContextProvider>
    </Provider>
  );
};
