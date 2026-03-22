import type { YouTubeVideoPage } from "@/features/youtube/domain/model/youtubeVideoPage";

export type YouTubeState =
  | { readonly status: "LOADING" }
  | { readonly status: "SUCCESS"; readonly data: YouTubeVideoPage }
  | { readonly status: "ERROR"; readonly message: string }
  | { readonly status: "EMPTY" };
