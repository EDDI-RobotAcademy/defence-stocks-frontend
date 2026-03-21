import { atom } from "jotai";
import { authAtom } from "@/features/auth/application/atoms/authAtom";

export const isAuthenticatedAtom = atom(
  (get) => get(authAtom).status === "AUTHENTICATED",
);

export const isAuthLoadingAtom = atom(
  (get) => get(authAtom).status === "LOADING",
);
