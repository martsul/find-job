import { logout } from "../../../redux/authorization/thunks/logout";
import { useAppDispatch } from "../../../redux/hooks";
import { AuthorizationState } from "../../../types/auth-state";

export const useHeaderButtons = (authStatus: AuthorizationState["status"]) => {
  const dispatch = useAppDispatch();

  const buttonsText = {
    first: authStatus === "authorized" ? "Start hiring" : "Sign In",
    second: authStatus === "authorized" ? "Find a job" : "Sign Up",
  };
  const buttonsLinks = {
    first:
      authStatus === "authorized" ? "/candidates" : "/authorization/signin",
    second:
      authStatus === "authorized" ? "/employers" : "/authorization/signup",
  };

  const handlerLogOut = () => {
    dispatch(logout());
  };

  return { buttonsText, buttonsLinks, handlerLogOut };
};
