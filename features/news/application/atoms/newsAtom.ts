import { atom } from "jotai";
import type { NewsState } from "@/features/news/domain/state/newsState";
import type { SaveArticleState } from "@/features/news/domain/state/saveArticleState";
import type { SavedArticle } from "@/features/news/domain/model/savedArticle";

export const NEWS_PAGE_SIZE = 10;
export const NEWS_DEFAULT_KEYWORD = "defense stocks";

export const newsAtom = atom<NewsState>({ status: "LOADING" });

export const newsPageAtom = atom<number>(1);

export const newsSaveStatesAtom = atom<Record<string, SaveArticleState>>({});

export const savedArticlesAtom = atom<Record<number, SavedArticle>>({});
