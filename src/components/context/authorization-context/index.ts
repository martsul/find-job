import { createContext } from "react";
import { AuthorizationData } from "../../../types/authorizations-data";

export const AuthorizationContext = createContext<AuthorizationData>({
  name: "none",
  sign: false,
  signCallback: () => {},
});
