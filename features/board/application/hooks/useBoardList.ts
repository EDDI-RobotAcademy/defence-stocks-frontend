"use client";

import { useCallback, useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import { boardAtom, boardPageAtom } from "@/features/board/application/atoms/boardAtom";
import { boardApi } from "@/features/board/infrastructure/api/boardApi";

const PAGE_SIZE = 10;

export function useBoardList() {
  const [boardState, setBoardState] = useAtom(boardAtom);
  const [currentPage, setCurrentPage] = useAtom(boardPageAtom);

  const fetchPage = useCallback(
    async (page: number) => {
      setBoardState({ status: "LOADING" });

      try {
        const data = await boardApi.fetchList(page, PAGE_SIZE);

        if (data.posts.length === 0) {
          setBoardState({ status: "EMPTY" });
        } else {
          setBoardState({ status: "SUCCESS", data });
        }
      } catch {
        setBoardState({
          status: "ERROR",
          message: "게시물을 불러오는데 실패했습니다.",
        });
      }
    },
    [setBoardState],
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

  return {
    boardState,
    currentPage,
    goToPage,
  };
}
