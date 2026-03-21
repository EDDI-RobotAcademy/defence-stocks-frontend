"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { userProfileStorage } from "@/features/auth/infrastructure/storage/userProfileStorage";
import { termsStorage } from "@/features/terms/infrastructure/storage/termsStorage";
import { signupPageStyles } from "@/ui/styles/signupPageStyles";

export default function SignupPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const agreements = termsStorage.load();
    const profile = userProfileStorage.load();

    if (!agreements || agreements.length === 0 || !profile) {
      router.replace("/terms");
      return;
    }

    console.log("[Signup] nickname:", profile.nickname);
    console.log("[Signup] email:", profile.email);

    setNickname(profile.nickname);
    setEmail(profile.email);
    setReady(true);
  }, [router]);

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
        <div className={signupPageStyles.profileInfo}>
          <p className={signupPageStyles.profileText}>닉네임: {nickname}</p>
          <p className={signupPageStyles.profileText}>이메일: {email}</p>
        </div>
      </div>
    </div>
  );
}
