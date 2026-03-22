"use client";

import { useCallback, useEffect } from "react";
import { useAtom } from "jotai";
import { youtubeAtom, youtubePageAtom } from "@/features/youtube/application/atoms/youtubeAtom";
import { youtubeApi } from "@/features/youtube/infrastructure/api/youtubeApi";

const PAGE_SIZE = 9;

export function useYoutubeList() {
  const [youtubeState, setYoutubeState] = useAtom(youtubeAtom);
  const [currentPage, setCurrentPage] = useAtom(youtubePageAtom);

  const fetchPage = useCallback(
    async (page: number) => {
      setYoutubeState({ status: "LOADING" });

      try {
        const data = await youtubeApi.fetchList(page, PAGE_SIZE);

        if (data.videos.length === 0) {
          setYoutubeState({ status: "EMPTY" });
        } else {
          setYoutubeState({ status: "SUCCESS", data });
        }
      } catch {
        setYoutubeState({
          status: "ERROR",
          message: "영상을 불러오는데 실패했습니다.",
        });
      }
    },
    [setYoutubeState],
  );

  useEffect(() => {
    fetchPage(currentPage);
  }, [currentPage, fetchPage]);

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage],
  );

  const totalPages = youtubeState.status === "SUCCESS"
    ? Math.ceil(youtubeState.data.totalResults / PAGE_SIZE)
    : 0;

  return {
    youtubeState,
    currentPage,
    totalPages,
    goToPage,
  };
}
