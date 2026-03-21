"use client";

import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { authAtom } from "@/features/auth/application/atoms/authAtom";
import { authApi } from "@/features/auth/infrastructure/api/authApi";

export function useAuthInit() {
  const setAuth = useSetAtom(authAtom);

  useEffect(() => {
    authApi
      .fetchMe()
      .then((me) => {
        if (me.isRegistered) {
          setAuth({ status: "AUTHENTICATED", token: "" });
        } else {
          setAuth({ status: "UNAUTHENTICATED" });
        }
      })
      .catch(() => {
        setAuth({ status: "UNAUTHENTICATED" });
      });
  }, [setAuth]);
}
