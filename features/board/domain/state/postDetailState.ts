import type { BoardPostDetail } from "@/features/board/domain/model/boardPostDetail";

export type PostDetailState =
  | { readonly status: "LOADING" }
  | { readonly status: "SUCCESS"; readonly data: BoardPostDetail }
  | { readonly status: "ERROR"; readonly message: string }
  | { readonly status: "NOT_FOUND" };
