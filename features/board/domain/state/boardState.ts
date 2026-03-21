import type { BoardPage } from "@/features/board/domain/model/boardPage";

export type BoardState =
  | { readonly status: "LOADING" }
  | { readonly status: "SUCCESS"; readonly data: BoardPage }
  | { readonly status: "ERROR"; readonly message: string }
  | { readonly status: "EMPTY" };
