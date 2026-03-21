"use client";

import { useParams } from "next/navigation";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { usePostDetail } from "@/features/board/application/hooks/usePostDetail";
import { boardReadPageStyles as s } from "@/ui/styles/boardReadPageStyles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BoardReadPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const state = usePostDetail(id);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthLoading, isAuthenticated, router]);

  if (isAuthLoading || !isAuthenticated) {
    return null;
  }

  return (
    <div className={s.container}>
      <div className={s.content}>
        {state.status === "LOADING" && (
          <div className={s.loading}>게시물을 불러오는 중...</div>
        )}

        {state.status === "ERROR" && (
          <div className={s.error}>
            <span>{state.message}</span>
            <Link href="/board" className={s.listButton}>
              목록으로
            </Link>
          </div>
        )}

        {state.status === "NOT_FOUND" && (
          <div className={s.notFound}>
            <span>존재하지 않는 게시물입니다.</span>
            <Link href="/board" className={s.listButton}>
              목록으로
            </Link>
          </div>
        )}

        {state.status === "SUCCESS" && (
          <>
            <article className={s.article.wrapper}>
              <div className={s.article.header}>
                <h1 className={s.article.title}>{state.data.title}</h1>
                <div className={s.article.meta}>
                  <span>{state.data.nickname}</span>
                  <span className={s.article.metaLabel}>|</span>
                  <span>{state.data.createdAt}</span>
                  <span className={s.article.metaLabel}>|</span>
                  <span>조회 {state.data.viewCount}</span>
                </div>
              </div>
              <div className={s.article.body}>{state.data.content}</div>
            </article>

            <div className={s.actions}>
              <Link href="/board" className={s.listButton}>
                목록으로
              </Link>
              <div className={s.actionGroup}>
                <Link
                  href={`/board/edit/${id}`}
                  className={s.editButton}
                >
                  수정
                </Link>
                <button type="button" className={s.deleteButton}>
                  삭제
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
