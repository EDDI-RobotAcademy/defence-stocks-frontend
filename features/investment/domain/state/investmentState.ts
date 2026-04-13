import type { InvestmentDecision } from "@/features/investment/domain/model/investmentDecision";

export type InvestmentState =
  | { readonly status: "IDLE" }
  | { readonly status: "LOADING" }
  | { readonly status: "SUCCESS"; readonly data: InvestmentDecision }
  | { readonly status: "ERROR"; readonly message: string };
