import { AuthError } from "../../types/auth-error";
import { AuthorizationState } from "../../types/auth-state";
import { IUser } from "../../types/i-user";

const setPending = (state: AuthorizationState) => {
  state.status = "pending";
};

const setError = (state: AuthorizationState, payload: AuthError) => {
  state.status = "error";
  state.data = payload.message;
};

const useAuthorized = (state: AuthorizationState, payload: IUser) => {

  state.status = "authorized";
  state.data = payload;

};

const setNotAuthorized = (state: AuthorizationState) => {
  state.status = "not authorized";
  state.data = null;
};

export { setError, useAuthorized, setNotAuthorized, setPending };
