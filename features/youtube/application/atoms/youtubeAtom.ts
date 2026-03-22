import { atom } from "jotai";
import type { YouTubeState } from "@/features/youtube/domain/state/youtubeState";

export const youtubeAtom = atom<YouTubeState>({ status: "LOADING" });

export const youtubePageAtom = atom<number>(1);
