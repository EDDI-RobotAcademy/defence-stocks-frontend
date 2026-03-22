"use client";

import { useAtomValue } from "jotai";
import {
  isAuthenticatedAtom,
  isAuthLoadingAtom,
} from "@/features/auth/application/selectors/authSelectors";
import { useYoutubeList } from "@/features/youtube/application/hooks/useYoutubeList";
import {
  youtubeVideosAtom,
  isYoutubeLoadingAtom,
  isYoutubeEmptyAtom,
  youtubeErrorAtom,
} from "@/features/youtube/application/selectors/youtubeSelectors";
import { youtubePageStyles as s } from "@/ui/styles/youtubePageStyles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function YouTubePage() {
  const router = useRouter();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const isAuthLoading = useAtomValue(isAuthLoadingAtom);
  const { currentPage, totalPages, goToPage } = useYoutubeList();

  const videos = useAtomValue(youtubeVideosAtom);
  const isLoading = useAtomValue(isYoutubeLoadingAtom);
  const isEmpty = useAtomValue(isYoutubeEmptyAtom);
  const error = useAtomValue(youtubeErrorAtom);

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
            <h1 className={s.header.title}>종목 영상 피드</h1>
            <span className={s.header.badge}>
              <span className={s.header.badgeDot} />
              YouTube
            </span>
          </div>
        </div>

        {isLoading && (
          <div className={s.loading}>영상을 불러오는 중...</div>
        )}

        {error && (
          <div className={s.error}>
            <span>{error}</span>
          </div>
        )}

        {isEmpty && (
          <div className={s.empty}>
            <span>등록된 영상이 없습니다.</span>
          </div>
        )}

        {!isLoading && !error && !isEmpty && (
          <>
            <div className={s.grid}>
              {videos.map((video) => (
                <a
                  key={video.videoId}
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.card.wrapper}
                >
                  <div className={s.card.thumbnailWrapper}>
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className={s.card.thumbnail}
                    />
                  </div>
                  <div className={s.card.body}>
                    <h2 className={s.card.title}>{video.title}</h2>
                    <div className={s.card.meta}>
                      <span className={s.card.channelName}>
                        {video.channelName}
                      </span>
                      <span className={s.card.publishedAt}>
                        {video.publishedAt}
                      </span>
                    </div>
                  </div>
                </a>
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
