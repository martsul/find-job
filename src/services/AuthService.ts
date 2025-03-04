import { AuthResponse } from "../types/auth-response";
import { $api } from "../http";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/login", { email, password });
  }
  static async registration(
    email: string,
    password: string,
    nickname: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      email,
      password,
      nickname,
    });
  }
  static async logout(): Promise<void> {
    $api.post<AuthResponse>("/logout");
  }
}
