import { atom } from "jotai";
import { youtubeAtom } from "@/features/youtube/application/atoms/youtubeAtom";

export const youtubeVideosAtom = atom((get) => {
  const state = get(youtubeAtom);
  return state.status === "SUCCESS" ? state.data.videos : [];
});

export const youtubeTotalResultsAtom = atom((get) => {
  const state = get(youtubeAtom);
  return state.status === "SUCCESS" ? state.data.totalResults : 0;
});

export const isYoutubeLoadingAtom = atom(
  (get) => get(youtubeAtom).status === "LOADING",
);

export const isYoutubeEmptyAtom = atom(
  (get) => get(youtubeAtom).status === "EMPTY",
);

export const youtubeErrorAtom = atom((get) => {
  const state = get(youtubeAtom);
  return state.status === "ERROR" ? state.message : null;
});
