import { atom } from "jotai";
import {
  newsAtom,
  newsSaveStatesAtom,
} from "@/features/news/application/atoms/newsAtom";
import type { SaveArticleState } from "@/features/news/domain/state/saveArticleState";

const IDLE_SAVE_STATE: SaveArticleState = { status: "IDLE" };

export const newsArticlesAtom = atom((get) => {
  const state = get(newsAtom);
  return state.status === "SUCCESS" ? state.data.articles : [];
});

export const newsTotalResultsAtom = atom((get) => {
  const state = get(newsAtom);
  return state.status === "SUCCESS" ? state.data.totalResults : 0;
});

export const newsTotalPagesAtom = atom((get) => {
  const state = get(newsAtom);
  return state.status === "SUCCESS" ? state.data.totalPages : 0;
});

export const isNewsLoadingAtom = atom(
  (get) => get(newsAtom).status === "LOADING",
);

export const isNewsEmptyAtom = atom(
  (get) => get(newsAtom).status === "EMPTY",
);

export const isNewsUnauthenticatedAtom = atom(
  (get) => get(newsAtom).status === "UNAUTHENTICATED",
);

export const newsErrorAtom = atom((get) => {
  const state = get(newsAtom);
  return state.status === "ERROR" ? state.message : null;
});

export const saveStateByLinkAtom = (link: string) =>
  atom((get): SaveArticleState => get(newsSaveStatesAtom)[link] ?? IDLE_SAVE_STATE);
