"use client";

import { useCallback } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import {
  newsSaveStatesAtom,
  savedArticlesAtom,
} from "@/features/news/application/atoms/newsAtom";
import { newsApi } from "@/features/news/infrastructure/api/newsApi";
import { HttpError } from "@/infrastructure/http/httpClient";
import type { NewsArticle } from "@/features/news/domain/model/newsArticle";
import type { SavedArticle } from "@/features/news/domain/model/savedArticle";
import type { SaveArticleRequest } from "@/features/news/domain/model/saveArticleRequest";
import type { SaveArticleState } from "@/features/news/domain/state/saveArticleState";

const IDLE_SAVE_STATE: SaveArticleState = { status: "IDLE" };

function toSaveRequest(article: NewsArticle): SaveArticleRequest {
  return {
    title: article.title,
    source: article.source,
    link: article.articleUrl,
    publishedAt: article.publishedAt,
  };
}

export function useSaveArticle() {
  const saveStates = useAtomValue(newsSaveStatesAtom);
  const setSaveStates = useSetAtom(newsSaveStatesAtom);
  const setSavedArticles = useSetAtom(savedArticlesAtom);

  const saveArticle = useCallback(
    async (article: NewsArticle): Promise<SavedArticle | null> => {
      const link = article.articleUrl;
      const current = saveStates[link];
      if (
        current &&
        (current.status === "SAVING" ||
          current.status === "SAVED" ||
          current.status === "DUPLICATE")
      ) {
        return null;
      }

      setSaveStates((prev) => ({ ...prev, [link]: { status: "SAVING" } }));

      try {
        const saved = await newsApi.saveInterestArticle(toSaveRequest(article));
        setSaveStates((prev) => ({
          ...prev,
          [link]: { status: "SAVED", id: saved.id },
        }));
        setSavedArticles((prev) => ({ ...prev, [saved.id]: saved }));
        return saved;
      } catch (error) {
        if (error instanceof HttpError && error.status === 409) {
          setSaveStates((prev) => ({
            ...prev,
            [link]: { status: "DUPLICATE" },
          }));
          return null;
        }
        if (error instanceof HttpError && error.status === 401) {
          setSaveStates((prev) => ({
            ...prev,
            [link]: { status: "ERROR", message: "인증이 필요합니다." },
          }));
          return null;
        }
        setSaveStates((prev) => ({
          ...prev,
          [link]: { status: "ERROR", message: "저장에 실패했습니다." },
        }));
        return null;
      }
    },
    [saveStates, setSaveStates, setSavedArticles],
  );

  const getSaveState = useCallback(
    (link: string): SaveArticleState =>
      saveStates[link] ?? IDLE_SAVE_STATE,
    [saveStates],
  );

  return { saveArticle, getSaveState };
}
