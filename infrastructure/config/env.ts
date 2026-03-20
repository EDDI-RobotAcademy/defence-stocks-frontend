// Next.js는 NEXT_PUBLIC_ 변수를 빌드 시점에 리터럴 접근만 인라인한다.
// process.env[dynamicKey] 패턴은 클라이언트에서 동작하지 않으므로
// 반드시 process.env.NEXT_PUBLIC_XXX 형태로 직접 참조해야 한다.

const clientValues = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  kakaoLoginPath: process.env.NEXT_PUBLIC_KAKAO_LOGIN_PATH,
} as const;

const missing = Object.entries(clientValues)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missing.length > 0) {
  throw new Error(
    `[env] 필수 환경 변수가 누락되었습니다: ${missing.map((k) => `"${k}"`).join(", ")}`
  );
}

// 클라이언트 노출 환경 변수 (NEXT_PUBLIC_ 접두사)
// 클라이언트와 서버 모두에서 접근 가능
export const clientEnv = clientValues as {
  readonly apiBaseUrl: string;
  readonly kakaoLoginPath: string;
};
