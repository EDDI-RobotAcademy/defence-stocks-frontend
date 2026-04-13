"use client";

import { useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { investmentPageStyles as s } from "@/ui/styles/investmentPageStyles";
import { useRouter } from "next/navigation";

export default function InvestmentPage() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const [question, setQuestion] = useState("");
  const isValid = question.trim().length > 0;

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthLoading, isAuthenticated, router]);

  if (isAuthLoading || !isAuthenticated) {
    return null;
  }

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.header.wrapper}>
          <div className="flex items-center gap-3">
            <h1 className={s.header.title}>투자 판단</h1>
            <span className={s.header.badge}>
              <span className={s.header.badgeDot} />
              AI
            </span>
          </div>
        </div>

        <div className={s.prompt.wrapper}>
          <label htmlFor="investment-question" className={s.prompt.label}>
            투자 판단 요청을 입력하세요
          </label>
          <textarea
            id="investment-question"
            rows={3}
            className={s.prompt.input}
            placeholder="예: LIG넥스원 주가 전망과 투자 판단을 해주세요"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className={s.prompt.footer}>
            <button
              type="button"
              className={isValid ? s.prompt.button : s.prompt.buttonDisabled}
              disabled={!isValid}
            >
              요청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
