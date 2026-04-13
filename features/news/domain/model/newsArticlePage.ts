import type { NewsArticle } from "@/features/news/domain/model/newsArticle";

export interface NewsArticlePage {
  readonly articles: readonly NewsArticle[];
  readonly totalResults: number;
  readonly totalPages: number;
  readonly currentPage: number;
  readonly pageSize: number;
}
