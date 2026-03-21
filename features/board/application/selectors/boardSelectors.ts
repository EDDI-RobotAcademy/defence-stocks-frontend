import { atom } from "jotai";
import { boardAtom } from "@/features/board/application/atoms/boardAtom";

export const boardPostsAtom = atom((get) => {
  const state = get(boardAtom);
  return state.status === "SUCCESS" ? state.data.posts : [];
});

export const boardTotalPagesAtom = atom((get) => {
  const state = get(boardAtom);
  return state.status === "SUCCESS" ? state.data.totalPages : 0;
});

export const isBoardLoadingAtom = atom(
  (get) => get(boardAtom).status === "LOADING",
);

export const isBoardEmptyAtom = atom(
  (get) => get(boardAtom).status === "EMPTY",
);

export const boardErrorAtom = atom((get) => {
  const state = get(boardAtom);
  return state.status === "ERROR" ? state.message : null;
});
