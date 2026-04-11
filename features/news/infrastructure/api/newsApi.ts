import { httpClient } from "@/infrastructure/http/httpClient";
import type { NewsArticlePage } from "@/features/news/domain/model/newsArticlePage";
import type { SaveArticleRequest } from "@/features/news/domain/model/saveArticleRequest";
import type { SavedArticle } from "@/features/news/domain/model/savedArticle";

interface NewsItemResponse {
  readonly title: string;
  readonly source: string | null;
  readonly link: string;
  readonly published_at: string | null;
}

interface NewsListResponse {
  readonly items: readonly NewsItemResponse[];
  readonly current_page: number;
  readonly page_size: number;
  readonly total_count: number;
}

interface SaveArticleResponseBody {
  readonly id: number;
  readonly title: string;
  readonly source: string | null;
  readonly link: string;
  readonly published_at: string | null;
  readonly content: string;
}

export const newsApi = {
  async searchNews(
    keyword: string,
    page: number,
    size: number,
  ): Promise<NewsArticlePage> {
    const params = new URLSearchParams({
      keyword,
      page: String(page),
      size: String(size),
    });
    const response = await httpClient.get<NewsListResponse>(
      `/news/search?${params.toString()}`,
    );

    const totalPages = Math.max(
      1,
      Math.ceil(response.total_count / response.page_size),
    );

    return {
      articles: response.items.map((item) => ({
        title: item.title,
        source: item.source,
        publishedAt: item.published_at,
        articleUrl: item.link,
      })),
      totalResults: response.total_count,
      totalPages,
      currentPage: response.current_page,
      pageSize: response.page_size,
    };
  },

  async saveInterestArticle(
    request: SaveArticleRequest,
  ): Promise<SavedArticle> {
    const response = await httpClient.post<SaveArticleResponseBody>(
      `/news/interest-articles`,
      {
        title: request.title,
        source: request.source,
        link: request.link,
        published_at: request.publishedAt,
      },
    );

    return {
      id: response.id,
      title: response.title,
      source: response.source,
      link: response.link,
      publishedAt: response.published_at,
      content: response.content,
    };
  },
} as const;
