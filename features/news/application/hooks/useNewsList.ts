"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import {
  newsAtom,
  newsPageAtom,
  NEWS_PAGE_SIZE,
  NEWS_DEFAULT_KEYWORD,
} from "@/features/news/application/atoms/newsAtom";
import { newsCommand } from "@/features/news/application/commands/newsCommand";

export function useNewsList() {
  const [newsState, setNewsState] = useAtom(newsAtom);
  const [currentPage, setCurrentPage] = useAtom(newsPageAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);

  const deps = useMemo(
    () => ({
      setState: setNewsState,
      setPage: setCurrentPage,
    }),
    [setNewsState, setCurrentPage],
  );

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    if (!isAuthenticated) {
      setNewsState({ status: "UNAUTHENTICATED" });
      return;
    }

    newsCommand.execute(
      {
        type: "LOAD_NEWS_PAGE",
        keyword: NEWS_DEFAULT_KEYWORD,
        page: currentPage,
        size: NEWS_PAGE_SIZE,
      },
      deps,
    );
  }, [isAuthLoading, isAuthenticated, currentPage, setNewsState, deps]);

  const goToPage = useCallback(
    (page: number) => {
      newsCommand.execute({ type: "CHANGE_NEWS_PAGE", page }, deps);
    },
    [deps],
  );

  const totalPages =
    newsState.status === "SUCCESS" ? newsState.data.totalPages : 0;

  return {
    newsState,
    currentPage,
    totalPages,
    goToPage,
  };
}
