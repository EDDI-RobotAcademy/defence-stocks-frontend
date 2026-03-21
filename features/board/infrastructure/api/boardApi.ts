import { httpClient } from "@/infrastructure/http/httpClient";
import type { BoardPage } from "@/features/board/domain/model/boardPage";

interface BoardPostResponse {
  readonly id: number;
  readonly title: string;
  readonly nickname: string;
  readonly created_at: string;
  readonly view_count: number;
}

interface BoardListResponse {
  readonly posts: readonly BoardPostResponse[];
  readonly total_pages: number;
  readonly current_page: number;
}

export const boardApi = {
  async fetchList(page: number = 1, size: number = 10): Promise<BoardPage> {
    const response = await httpClient.get<BoardListResponse>(
      `/board/list?page=${page}&size=${size}`,
    );

    return {
      posts: response.posts.map((post) => ({
        id: post.id,
        title: post.title,
        nickname: post.nickname,
        createdAt: post.created_at,
        viewCount: post.view_count,
      })),
      totalPages: response.total_pages,
      currentPage: response.current_page,
    };
  },
} as const;
