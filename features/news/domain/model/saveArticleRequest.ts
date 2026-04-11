export interface SaveArticleRequest {
  readonly title: string;
  readonly source: string | null;
  readonly link: string;
  readonly publishedAt: string | null;
}
