"use client";

import { useState, useCallback } from "react";
import type { MarketAnalysisState } from "@/features/stock-recommendation/domain/state/marketAnalysisState";
import { marketAnalysisApi } from "@/features/stock-recommendation/infrastructure/api/marketAnalysisApi";

export function useMarketAnalysis() {
  const [state, setState] = useState<MarketAnalysisState>({ status: "IDLE" });
  const [question, setQuestion] = useState("");

  const isValid = question.trim().length > 0;

  const submit = useCallback(async () => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setState({ status: "LOADING" });

    try {
      const data = await marketAnalysisApi.ask(trimmed);
      setState({ status: "SUCCESS", data });
    } catch {
      setState({
        status: "ERROR",
        message: "질문 처리에 실패했습니다. 다시 시도해주세요.",
      });
    }
  }, [question]);

  return {
    state,
    question,
    setQuestion,
    isValid,
    submit,
  };
}
