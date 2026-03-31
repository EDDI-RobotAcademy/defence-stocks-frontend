import type { MarketAnalysisAnswer } from "@/features/stock-recommendation/domain/model/marketAnalysis";

export type MarketAnalysisState =
  | { readonly status: "IDLE" }
  | { readonly status: "LOADING" }
  | { readonly status: "SUCCESS"; readonly data: MarketAnalysisAnswer }
  | { readonly status: "ERROR"; readonly message: string };
