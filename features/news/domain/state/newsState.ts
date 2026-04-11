import type { NewsArticlePage } from "@/features/news/domain/model/newsArticlePage";

export type NewsState =
  | { readonly status: "LOADING" }
  | { readonly status: "SUCCESS"; readonly data: NewsArticlePage }
  | { readonly status: "EMPTY" }
  | { readonly status: "ERROR"; readonly message: string }
  | { readonly status: "UNAUTHENTICATED" };
