"use client";

import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { useCreatePost } from "@/features/board/application/hooks/useCreatePost";
import { boardCreatePageStyles as s } from "@/ui/styles/boardCreatePageStyles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BoardCreatePage() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const { title, setTitle, content, setContent, state, isValid, submit } =
    useCreatePost();

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthLoading, isAuthenticated, router]);

  if (isAuthLoading || !isAuthenticated) {
    return null;
  }

  const isSubmitting = state.status === "SUBMITTING";

  return (
    <div className={s.container}>
      <div className={s.content}>
        <h1 className={s.title}>게시물 작성</h1>

        <div className={s.form}>
          {state.status === "ERROR" && (
            <div className={s.error}>{state.message}</div>
          )}

          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isSubmitting}
            className={s.titleInput}
          />

          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isSubmitting}
            className={s.contentArea}
          />

          <div className={s.actions}>
            <Link href="/board" className={s.cancelButton}>
              취소
            </Link>
            <button
              type="button"
              disabled={!isValid || isSubmitting}
              onClick={submit}
              className={
                isValid && !isSubmitting
                  ? s.submitButton
                  : s.submitButtonDisabled
              }
            >
              {isSubmitting ? "등록 중..." : "등록"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
