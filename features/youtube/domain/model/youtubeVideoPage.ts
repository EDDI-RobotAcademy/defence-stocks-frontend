import type { YouTubeVideo } from "@/features/youtube/domain/model/youtubeVideo";

export interface YouTubeVideoPage {
  readonly videos: readonly YouTubeVideo[];
  readonly nextPageToken: string | null;
  readonly prevPageToken: string | null;
  readonly totalResults: number;
  readonly currentPage: number;
}
