"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { CreatePostState } from "@/features/board/domain/state/createPostState";
import { boardApi } from "@/features/board/infrastructure/api/boardApi";

export function useEditPost(id: number) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [state, setState] = useState<CreatePostState>({ status: "IDLE" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    boardApi
      .fetchPost(id)
      .then((post) => {
        if (post) {
          setTitle(post.title);
          setContent(post.content);
          setIsLoaded(true);
        } else {
          setState({ status: "ERROR", message: "존재하지 않는 게시물입니다." });
        }
      })
      .catch(() => {
        setState({ status: "ERROR", message: "게시물을 불러오는데 실패했습니다." });
      });
  }, [id]);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const submit = useCallback(async () => {
    if (!isValid) return;

    setState({ status: "SUBMITTING" });

    try {
      await boardApi.editPost({
        boardId: id,
        title: title.trim(),
        content: content.trim(),
      });
      setState({ status: "SUCCESS" });
      router.push(`/board/read/${id}`);
    } catch {
      setState({
        status: "ERROR",
        message: "게시물 수정에 실패했습니다.",
      });
    }
  }, [id, title, content, isValid, router]);

  return {
    title,
    setTitle,
    content,
    setContent,
    state,
    isValid,
    isLoaded,
    submit,
  };
}
