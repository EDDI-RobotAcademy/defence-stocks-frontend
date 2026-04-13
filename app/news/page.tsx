"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { useNewsList } from "@/features/news/application/hooks/useNewsList";
import { useSaveArticle } from "@/features/news/application/hooks/useSaveArticle";
import {
  newsArticlesAtom,
  isNewsLoadingAtom,
  isNewsEmptyAtom,
  newsErrorAtom,
} from "@/features/news/application/selectors/newsSelectors";
import type { SaveArticleState } from "@/features/news/domain/state/saveArticleState";
import { newsPageStyles as s } from "@/ui/styles/newsPageStyles";

function saveButtonLabel(state: SaveArticleState): string {
  switch (state.status) {
    case "SAVING":
      return "저장 중...";
    case "SAVED":
      return "저장됨";
    case "DUPLICATE":
      return "이미 저장됨";
    case "ERROR":
      return "재시도";
    case "IDLE":
    default:
      return "저장하기";
  }
}

function isSaveButtonDisabled(state: SaveArticleState): boolean {
  return (
    state.status === "SAVING" ||
    state.status === "SAVED" ||
    state.status === "DUPLICATE"
  );
}

function buildPageNumbers(
  current: number,
  total: number,
): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];

  if (current > 3) {
    pages.push("...");
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (current < total - 2) {
    pages.push("...");
  }

  pages.push(total);

  return pages;
}

export default function NewsPage() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const { currentPage, totalPages, goToPage } = useNewsList();
  const { saveArticle, getSaveState } = useSaveArticle();

  const articles = useAtomValue(newsArticlesAtom);
  const isLoading = useAtomValue(isNewsLoadingAtom);
  const isEmpty = useAtomValue(isNewsEmptyAtom);
  const error = useAtomValue(newsErrorAtom);

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
            <h1 className={s.header.title}>주식 관련 뉴스</h1>
            <span className={s.header.badge}>
              <span className={s.header.badgeDot} />
              News
            </span>
          </div>
        </div>

        {isLoading && (
          <div className={s.loading}>뉴스를 불러오는 중...</div>
        )}

        {error && (
          <div className={s.error}>
            <span>{error}</span>
          </div>
        )}

        {isEmpty && (
          <div className={s.empty}>
            <span>등록된 뉴스가 없습니다.</span>
          </div>
        )}

        {!isLoading && !error && !isEmpty && (
          <>
            <div className={s.list}>
              {articles.map((article) => {
                const saveState = getSaveState(article.articleUrl);
                const disabled = isSaveButtonDisabled(saveState);
                const isError = saveState.status === "ERROR";
                return (
                  <a
                    key={article.articleUrl}
                    href={article.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.card.wrapper}
                  >
                    <div className={s.card.body}>
                      <h2 className={s.card.title}>{article.title}</h2>
                      <div className={s.card.meta}>
                        <span className={s.card.source}>
                          {article.source ?? ""}
                        </span>
                        <span className={s.card.publishedAt}>
                          {article.publishedAt
                            ? article.publishedAt.slice(0, 10)
                            : ""}
                        </span>
                      </div>
                      <div className={s.card.actions}>
                        {isError && (
                          <span className={s.card.saveError}>
                            {saveState.message}
                          </span>
                        )}
                        <button
                          type="button"
                          className={
                            disabled
                              ? s.card.saveButtonDisabled
                              : s.card.saveButton
                          }
                          disabled={disabled}
                          onClick={async (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const saved = await saveArticle(article);
                            if (saved) {
                              router.push(`/news/saved/${saved.id}`);
                            }
                          }}
                        >
                          {saveButtonLabel(saveState)}
                        </button>
                      </div>
                    </div>
                  </a>
                );
              })}
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

                {buildPageNumbers(currentPage, totalPages).map((item, idx) =>
                  item === "..." ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className={s.pagination.ellipsis}
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      className={
                        item === currentPage
                          ? s.pagination.buttonActive
                          : s.pagination.button
                      }
                      onClick={() => goToPage(item as number)}
                    >
                      {item}
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
