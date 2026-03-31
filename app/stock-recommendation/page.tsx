"use client";

import { useState, useEffect } from "react";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { stockRecommendationPageStyles as s } from "@/ui/styles/stockRecommendationPageStyles";
import { useRouter } from "next/navigation";

export default function StockRecommendationPage() {
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
            <h1 className={s.header.title}>주식 추천</h1>
            <span className={s.header.badge}>
              <span className={s.header.badgeDot} />
              AI
            </span>
          </div>
        </div>

        <div className={s.prompt.wrapper}>
          <label htmlFor="question" className={s.prompt.label}>
            방산주 관련 질문을 입력하세요
          </label>
          <textarea
            id="question"
            rows={3}
            className={s.prompt.input}
            placeholder="예: 최근 방산주 중 추천할 종목이 있나요?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div className={s.prompt.footer}>
            <button
              type="button"
              className={isValid ? s.prompt.button : s.prompt.buttonDisabled}
              disabled={!isValid}
            >
              질문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
