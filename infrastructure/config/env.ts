const requireEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`[env] 필수 환경 변수가 누락되었습니다: "${key}"`);
  }
  return value;
};

const REQUIRED_CLIENT_KEYS = [
  "NEXT_PUBLIC_API_BASE_URL",
  "NEXT_PUBLIC_KAKAO_LOGIN_PATH",
] as const;

const validateClientEnv = () => {
  const missing = REQUIRED_CLIENT_KEYS.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `[env] 필수 환경 변수가 누락되었습니다: ${missing.map((k) => `"${k}"`).join(", ")}`
    );
  }
};

validateClientEnv();

// 클라이언트 노출 환경 변수 (NEXT_PUBLIC_ 접두사)
// 클라이언트와 서버 모두에서 접근 가능
export const clientEnv = {
  apiBaseUrl: requireEnv("NEXT_PUBLIC_API_BASE_URL"),
  kakaoLoginPath: requireEnv("NEXT_PUBLIC_KAKAO_LOGIN_PATH"),
} as const;
