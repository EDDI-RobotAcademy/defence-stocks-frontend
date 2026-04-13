"use client";

import { useCallback, useState } from "react";
import { useAtom } from "jotai";
import { investmentAtom } from "@/features/investment/application/atoms/investmentAtom";
import { investmentApi } from "@/features/investment/infrastructure/api/investmentApi";

export function useInvestmentDecision() {
  const [state, setState] = useAtom(investmentAtom);
  const [question, setQuestion] = useState("");

  const isValid = question.trim().length > 0;

  const submit = useCallback(async () => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setState({ status: "LOADING" });

    try {
      const data = await investmentApi.requestDecision(trimmed);
      setState({ status: "SUCCESS", data });
    } catch {
      setState({
        status: "ERROR",
        message: "투자 판단 요청에 실패했습니다.",
      });
    }
  }, [question, setState]);

  return { state, question, setQuestion, isValid, submit };
}
