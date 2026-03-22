import { httpClient } from "@/infrastructure/http/httpClient";
import type { YouTubeVideoPage } from "@/features/youtube/domain/model/youtubeVideoPage";

interface YouTubeVideoResponse {
  readonly video_id: string;
  readonly title: string;
  readonly thumbnail_url: string;
  readonly channel_name: string;
  readonly published_at: string;
  readonly video_url: string;
}

interface YouTubeListResponse {
  readonly items: readonly YouTubeVideoResponse[];
  readonly next_page_token: string | null;
  readonly prev_page_token: string | null;
  readonly total_results: number;
}

export const youtubeApi = {
  async fetchList(page: number = 1, size: number = 9): Promise<YouTubeVideoPage> {
    const response = await httpClient.get<YouTubeListResponse>(
      `/youtube/list?page=${page}&size=${size}`,
    );

    return {
      videos: response.items.map((item) => ({
        videoId: item.video_id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        channelName: item.channel_name,
        publishedAt: item.published_at.slice(0, 10),
        videoUrl: item.video_url,
      })),
      nextPageToken: response.next_page_token,
      prevPageToken: response.prev_page_token,
      totalResults: response.total_results,
      currentPage: page,
    };
  },
} as const;
