"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authApi } from "@/features/auth/infrastructure/api/authApi";
import { userProfileStorage } from "@/features/auth/infrastructure/storage/userProfileStorage";
import { termsStorage } from "@/features/terms/infrastructure/storage/termsStorage";
import TextField from "@/ui/components/TextField";
import { signupPageStyles } from "@/ui/styles/signupPageStyles";

export default function SignupPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = nickname.trim().length > 0 && !submitting;

  useEffect(() => {
    const agreements = termsStorage.load();
    const profile = userProfileStorage.load();

    if (!agreements || agreements.length === 0 || !profile) {
      router.replace("/terms");
      return;
    }

    setNickname(profile.nickname);
    setEmail(profile.email);
    setReady(true);
  }, [router]);

  const handleSubmit = async () => {
    if (!canSubmit) return;

    const agreements = termsStorage.load();
    if (!agreements) return;

    setError("");
    setSubmitting(true);

    try {
      await authApi.signup({
        nickname: nickname.trim(),
        email
      });

      termsStorage.clear();
      userProfileStorage.clear();
      router.replace("/");
    } catch {
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!ready) {
    return null;
  }

  return (
    <div className={signupPageStyles.container}>
      <div className={signupPageStyles.card}>
        <div className="flex flex-col items-center gap-2">
          <h1 className={signupPageStyles.title}>회원가입</h1>
          <p className={signupPageStyles.description}>
            추가 정보를 입력하여 가입을 완료하세요
          </p>
        </div>
        <div className={signupPageStyles.form}>
          <TextField
            label="닉네임"
            value={nickname}
            onChange={setNickname}
            placeholder="닉네임을 입력하세요"
          />
          <TextField
            label="이메일"
            value={email}
            onChange={() => {}}
            disabled
          />
        </div>

        {error && <p className={signupPageStyles.errorMessage}>{error}</p>}

        <button
          type="button"
          disabled={!canSubmit}
          onClick={handleSubmit}
          className={
            canSubmit
              ? signupPageStyles.submitButton
              : signupPageStyles.submitButtonDisabled
          }
        >
          {submitting ? "처리 중..." : "회원가입"}
        </button>
      </div>
    </div>
  );
}
