import { httpClient, HttpError } from "@/infrastructure/http/httpClient";
import type { BoardPage } from "@/features/board/domain/model/boardPage";
import type { BoardPostDetail } from "@/features/board/domain/model/boardPostDetail";
import type { CreatePostRequest } from "@/features/board/domain/model/createPostRequest";

interface BoardPostResponse {
  readonly id: number;
  readonly title: string;
  readonly nickname: string;
  readonly created_at: string;
  readonly view_count: number;
}

interface BoardPostDetailResponse {
  readonly id: number;
  readonly title: string;
  readonly content: string;
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
  async createPost(request: CreatePostRequest): Promise<number> {
    const response = await httpClient.post<{ id: number }>("/board/register", {
      title: request.title,
      content: request.content,
    });
    return response.id;
  },

  async fetchPost(id: number): Promise<BoardPostDetail | null> {
    try {
      const response = await httpClient.get<BoardPostDetailResponse>(
        `/board/read/${id}`,
      );
      return {
        id: response.id,
        title: response.title,
        content: response.content,
        nickname: response.nickname,
        createdAt: response.created_at,
        viewCount: response.view_count,
      };
    } catch (error) {
      if (error instanceof HttpError && error.status === 404) {
        return null;
      }
      throw error;
    }
  },
} as const;
