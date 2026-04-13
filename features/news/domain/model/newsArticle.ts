export interface NewsArticle {
  readonly title: string;
  readonly source: string | null;
  readonly publishedAt: string | null;
  readonly articleUrl: string;
}
