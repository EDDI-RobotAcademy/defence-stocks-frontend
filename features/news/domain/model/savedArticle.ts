export interface SavedArticle {
  readonly id: number;
  readonly title: string;
  readonly source: string | null;
  readonly link: string;
  readonly publishedAt: string | null;
  readonly content: string;
}
