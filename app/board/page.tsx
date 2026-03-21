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
import Link from "next/link";
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
        <div className={s.header.wrapper}>
          <div className="flex items-center gap-3">
            <h1 className={s.header.title}>밀리터리 게시판</h1>
            <span className={s.header.badge}>
              <span className={s.header.badgeDot} />
              Live
            </span>
          </div>
          <Link href="/board/create" className={s.header.createButton}>
            글쓰기
          </Link>
        </div>

        {isLoading && (
          <div className={s.loading}>게시물을 불러오는 중...</div>
        )}

        {error && (
          <div className={s.error}>
            <span>{error}</span>
          </div>
        )}

        {isEmpty && (
          <div className={s.empty}>
            <span>등록된 게시물이 없습니다.</span>
          </div>
        )}

        {!isLoading && !error && !isEmpty && (
          <>
            <div className={s.table.wrapper}>
              <div className={s.table.header}>
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>작성일</span>
              </div>
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/board/read/${post.id}`}
                  className={s.table.row}
                >
                  <span className={s.table.rowNumber}>{post.id}</span>

                  <div className={s.table.mobileHeader}>
                    <span className={s.table.mobileNumber}>{post.id}</span>
                    <span className={s.table.rowTitle}>{post.title}</span>
                  </div>
                  <span className={`${s.table.rowTitle} hidden sm:block`}>
                    {post.title}
                  </span>

                  <div className={s.table.mobileMetaRow}>
                    <span className={s.table.rowMeta}>
                      <span className={s.table.rowMetaLabel}>작성자</span>
                      {post.nickname}
                    </span>
                    <span className={s.table.rowMeta}>
                      <span className={s.table.rowMetaLabel}>작성일</span>
                      {post.createdAt}
                    </span>
                  </div>

                  <span className={`${s.table.rowMeta} hidden sm:block`}>
                    {post.nickname}
                  </span>
                  <span className={`${s.table.rowMeta} hidden sm:block`}>
                    {post.createdAt}
                  </span>
                </Link>
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
