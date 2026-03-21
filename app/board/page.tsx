"use client";

import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { useBoardList } from "@/features/board/application/hooks/useBoardList";
import {
  boardPostsAtom,
  boardTotalPagesAtom,
  isBoardLoadingAtom,
  isBoardEmptyAtom,
  boardErrorAtom,
} from "@/features/board/application/selectors/boardSelectors";
import { boardPageStyles as s } from "@/ui/styles/boardPageStyles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BoardPage() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const { currentPage, goToPage } = useBoardList();

  const posts = useAtomValue(boardPostsAtom);
  const totalPages = useAtomValue(boardTotalPagesAtom);
  const isLoading = useAtomValue(isBoardLoadingAtom);
  const isEmpty = useAtomValue(isBoardEmptyAtom);
  const error = useAtomValue(boardErrorAtom);

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
        <h1 className={s.title}>밀리터리 게시판</h1>

        {isLoading && (
          <div className={s.loading}>게시물을 불러오는 중...</div>
        )}

        {error && (
          <div className={s.error}>
            <span>{error}</span>
          </div>
        )}

        {isEmpty && (
          <div className={s.empty}>등록된 게시물이 없습니다.</div>
        )}

        {!isLoading && !error && !isEmpty && (
          <>
            <div className={s.table.wrapper}>
              <div className={s.table.header}>
                <span>제목</span>
                <span>작성자</span>
                <span>작성일</span>
                <span>조회수</span>
              </div>
              {posts.map((post) => (
                <div key={post.id} className={s.table.row}>
                  <span className={s.table.rowTitle}>{post.title}</span>
                  <span className={s.table.rowMeta}>
                    <span className={s.table.rowMetaLabel}>작성자</span>
                    {post.nickname}
                  </span>
                  <span className={s.table.rowMeta}>
                    <span className={s.table.rowMetaLabel}>작성일</span>
                    {post.createdAt}
                  </span>
                  <span className={s.table.rowMeta}>
                    <span className={s.table.rowMetaLabel}>조회</span>
                    {post.viewCount}
                  </span>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className={s.pagination.wrapper}>
                <button
                  type="button"
                  className={
                    currentPage <= 1
                      ? s.pagination.buttonDisabled
                      : s.pagination.button
                  }
                  disabled={currentPage <= 1}
                  onClick={() => goToPage(currentPage - 1)}
                >
                  이전
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      className={
                        page === currentPage
                          ? s.pagination.buttonActive
                          : s.pagination.button
                      }
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  className={
                    currentPage >= totalPages
                      ? s.pagination.buttonDisabled
                      : s.pagination.button
                  }
                  disabled={currentPage >= totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                >
                  다음
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
