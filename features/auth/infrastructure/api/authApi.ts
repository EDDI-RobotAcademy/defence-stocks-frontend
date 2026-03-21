import { httpClient } from "@/infrastructure/http/httpClient";
import type { AuthMe } from "@/features/auth/domain/model/authMe";

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
} as const;
