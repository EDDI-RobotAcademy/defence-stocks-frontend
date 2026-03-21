"use client";

import { useEffect, useState } from "react";
import type { PostDetailState } from "@/features/board/domain/state/postDetailState";
import { boardApi } from "@/features/board/infrastructure/api/boardApi";

export function usePostDetail(id: number) {
  const [state, setState] = useState<PostDetailState>({ status: "LOADING" });

  useEffect(() => {
    setState({ status: "LOADING" });

    boardApi
      .fetchPost(id)
      .then((post) => {
        if (post) {
          setState({ status: "SUCCESS", data: post });
        } else {
          setState({ status: "NOT_FOUND" });
        }
      })
      .catch(() => {
        setState({
          status: "ERROR",
          message: "게시물을 불러오는데 실패했습니다.",
        });
      });
  }, [id]);

  return state;
}
