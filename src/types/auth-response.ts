import { IUser } from "./i-user";

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: IUser;
};
