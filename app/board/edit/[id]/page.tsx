"use client";

import { useParams } from "next/navigation";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { useEditPost } from "@/features/board/application/hooks/useEditPost";
import { boardCreatePageStyles as s } from "@/ui/styles/boardCreatePageStyles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BoardEditPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const { title, setTitle, content, setContent, state, isValid, isLoaded, submit } =
    useEditPost(id);

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
        <h1 className={s.title}>게시물 수정</h1>

        <div className={s.form}>
          {state.status === "ERROR" && (
            <div className={s.error}>{state.message}</div>
          )}

          {!isLoaded && state.status !== "ERROR" && (
            <div className="py-12 text-center text-sm text-zinc-400 dark:text-zinc-500">
              게시물을 불러오는 중...
            </div>
          )}

          {isLoaded && (
            <>
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
                <Link href={`/board/read/${id}`} className={s.cancelButton}>
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
                  {isSubmitting ? "수정 중..." : "수정"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
