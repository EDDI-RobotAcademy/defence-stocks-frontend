"use client";

import { clientEnv } from "@/infrastructure/config/env";
import { kakaoButtonStyles } from "@/ui/styles/kakaoButtonStyles";

export default function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    const kakaoOAuthUrl = `${clientEnv.apiBaseUrl}${clientEnv.kakaoLoginPath}`;
    window.location.href = kakaoOAuthUrl;
  };

  return (
    <button
      type="button"
      onClick={handleKakaoLogin}
      className={`${kakaoButtonStyles.base} ${kakaoButtonStyles.default}`}
    >
      Kakao로 로그인
    </button>
  );
}
