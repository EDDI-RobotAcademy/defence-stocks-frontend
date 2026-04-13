"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { savedArticlesAtom } from "@/features/news/application/atoms/newsAtom";
import { savedNewsPageStyles as s } from "@/ui/styles/savedNewsPageStyles";

export default function SavedNewsReadPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const savedArticles = useAtomValue(savedArticlesAtom);

  const id = Number(params.id);
  const article = Number.isFinite(id) ? savedArticles[id] : undefined;

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
        <Link href="/news" className={s.backLink}>
          ← 뉴스 목록으로
        </Link>

        {!article ? (
          <div className={s.notFound}>
            <p>저장된 뉴스를 찾을 수 없습니다.</p>
            <button
              type="button"
              className={s.notFoundButton}
              onClick={() => router.push("/news")}
            >
              뉴스 목록으로 이동
            </button>
          </div>
        ) : (
          <article className={s.card}>
            <h1 className={s.title}>{article.title}</h1>
            <div className={s.meta}>
              {article.source && (
                <span className={s.source}>{article.source}</span>
              )}
              {article.publishedAt && (
                <span className={s.publishedAt}>
                  {article.publishedAt.slice(0, 10)}
                </span>
              )}
            </div>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={s.link}
            >
              원문 링크 열기 →
            </a>
            <div className={s.divider} />
            <div className={s.content_}>{article.content}</div>
          </article>
        )}
      </div>
    </div>
  );
}
