import { httpClient } from "@/infrastructure/http/httpClient";
import { clientEnv } from "@/infrastructure/config/env";
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

  submitSignup(request: SignupRequest): void {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = `${clientEnv.apiBaseUrl}/account/sign-up`;

    const nicknameInput = document.createElement("input");
    nicknameInput.type = "hidden";
    nicknameInput.name = "nickname";
    nicknameInput.value = request.nickname;
    form.appendChild(nicknameInput);

    const emailInput = document.createElement("input");
    emailInput.type = "hidden";
    emailInput.name = "email";
    emailInput.value = request.email;
    form.appendChild(emailInput);

    document.body.appendChild(form);
    form.submit();
  },
} as const;
