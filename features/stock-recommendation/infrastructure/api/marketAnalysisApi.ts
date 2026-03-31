import { httpClient } from "@/infrastructure/http/httpClient";
import type { MarketAnalysisAnswer } from "@/features/stock-recommendation/domain/model/marketAnalysis";

interface MarketAnalysisResponse {
  readonly question: string;
  readonly answer: string;
}

export const marketAnalysisApi = {
  async ask(question: string): Promise<MarketAnalysisAnswer> {
    const response = await httpClient.post<MarketAnalysisResponse>(
      "/market-analysis/ask",
      { question },
    );

    return {
      question: response.question,
      answer: response.answer,
    };
  },
} as const;
