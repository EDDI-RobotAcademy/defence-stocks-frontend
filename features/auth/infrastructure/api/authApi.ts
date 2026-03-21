import { httpClient } from "@/infrastructure/http/httpClient";
import type { AuthMe } from "@/features/auth/domain/model/authMe";
import type { SignupRequest } from "@/features/auth/domain/model/signupRequest";

interface AuthMeResponse {
  readonly is_registered: boolean;
  readonly nickname: string;
  readonly email: string;
}

export const authApi = {
  async fetchMe(): Promise<AuthMe> {
    const response = await httpClient.get<AuthMeResponse>("/authentication/me");

    return {
      isRegistered: response.is_registered,
      nickname: response.nickname,
      email: response.email,
    };
  },

  async signup(request: SignupRequest): Promise<void> {
    await httpClient.post("/account/sign-up", {
      nickname: request.nickname,
      email: request.email,
    });
  },
} as const;
