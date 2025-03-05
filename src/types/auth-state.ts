import { IUser } from "./i-user";

export type AuthorizationState = {
  status: "not authorized" | "pending" | "authorized" | "error";
  data: IUser | null | string;
};
