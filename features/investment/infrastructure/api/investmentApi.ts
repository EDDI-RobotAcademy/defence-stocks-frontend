import { httpClient } from "@/infrastructure/http/httpClient";
import type { InvestmentDecision } from "@/features/investment/domain/model/investmentDecision";

interface InvestmentDecisionResponse {
  readonly answer: string;
}

export const investmentApi = {
  async requestDecision(query: string): Promise<InvestmentDecision> {
    const response = await httpClient.post<InvestmentDecisionResponse>(
      `/investment/decision`,
      { query },
    );

    return {
      answer: response.answer,
    };
  },
} as const;
