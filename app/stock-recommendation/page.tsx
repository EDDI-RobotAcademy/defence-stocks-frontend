"use client";

import { useEffect } from "react";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { useMarketAnalysis } from "@/features/stock-recommendation/application/hooks/useMarketAnalysis";
import { stockRecommendationPageStyles as s } from "@/ui/styles/stockRecommendationPageStyles";
import { useRouter } from "next/navigation";

export default function StockRecommendationPage() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const { state, question, setQuestion, isValid, submit } = useMarketAnalysis();

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
            disabled={state.status === "LOADING"}
          />
          <div className={s.prompt.footer}>
            <button
              type="button"
              className={
                isValid && state.status !== "LOADING"
                  ? s.prompt.button
                  : s.prompt.buttonDisabled
              }
              disabled={!isValid || state.status === "LOADING"}
              onClick={submit}
            >
              {state.status === "LOADING" ? "분석 중..." : "질문하기"}
            </button>
          </div>
        </div>

        {state.status === "LOADING" && (
          <div className={s.loading}>AI가 답변을 생성하고 있습니다...</div>
        )}

        {state.status === "ERROR" && (
          <div className={s.error}>
            <span>{state.message}</span>
          </div>
        )}

        {state.status === "SUCCESS" && (
          <div className={s.answer.wrapper}>
            <span className={s.answer.label}>AI 답변</span>
            <div className={s.answer.body}>{state.data.answer}</div>
          </div>
        )}
      </div>
    </div>
  );
}
