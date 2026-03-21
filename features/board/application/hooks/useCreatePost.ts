"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import type { CreatePostState } from "@/features/board/domain/state/createPostState";
import { boardApi } from "@/features/board/infrastructure/api/boardApi";

export function useCreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [state, setState] = useState<CreatePostState>({ status: "IDLE" });

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const submit = useCallback(async () => {
    if (!isValid) return;

    setState({ status: "SUBMITTING" });

    try {
      const postId = await boardApi.createPost({
        title: title.trim(),
        content: content.trim(),
      });
      setState({ status: "SUCCESS" });
      router.push(`/board/read/${postId}`);
    } catch {
      setState({
        status: "ERROR",
        message: "게시물 작성에 실패했습니다.",
      });
    }
  }, [title, content, isValid, router]);

  return {
    title,
    setTitle,
    content,
    setContent,
    state,
    isValid,
    submit,
  };
}
