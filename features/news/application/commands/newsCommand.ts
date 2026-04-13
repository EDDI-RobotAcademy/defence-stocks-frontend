import type { NewsIntent } from "@/features/news/domain/intent/newsIntent";
import type { NewsState } from "@/features/news/domain/state/newsState";
import { newsApi } from "@/features/news/infrastructure/api/newsApi";

type SetState = (state: NewsState) => void;
type SetPage = (page: number) => void;

interface NewsCommandDeps {
  readonly setState: SetState;
  readonly setPage: SetPage;
}

export const newsCommand = {
  async execute(intent: NewsIntent, deps: NewsCommandDeps): Promise<void> {
    const handlers = {
      LOAD_NEWS_PAGE: async (
        action: Extract<NewsIntent, { type: "LOAD_NEWS_PAGE" }>,
      ) => {
        deps.setState({ status: "LOADING" });

        try {
          const data = await newsApi.searchNews(
            action.keyword,
            action.page,
            action.size,
          );

          if (data.articles.length === 0) {
            deps.setState({ status: "EMPTY" });
          } else {
            deps.setState({ status: "SUCCESS", data });
          }
        } catch {
          deps.setState({
            status: "ERROR",
            message: "뉴스를 불러오는데 실패했습니다.",
          });
        }
      },
      CHANGE_NEWS_PAGE: async (
        action: Extract<NewsIntent, { type: "CHANGE_NEWS_PAGE" }>,
      ) => {
        deps.setPage(action.page);
      },
    } as const;

    await handlers[intent.type](intent as never);
  },
} as const;
