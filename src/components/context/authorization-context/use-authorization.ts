import { useContext } from "react";
import { AuthorizationContext } from ".";

export const useAuthorization = () => useContext(AuthorizationContext)