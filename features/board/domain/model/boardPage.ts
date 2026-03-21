import type { BoardPost } from "@/features/board/domain/model/boardPost";

export interface BoardPage {
  readonly posts: readonly BoardPost[];
  readonly totalPages: number;
  readonly currentPage: number;
}
