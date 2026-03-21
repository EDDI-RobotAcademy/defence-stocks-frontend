"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useSetAtom } from "jotai";
import { authAtom } from "@/features/auth/application/atoms/authAtom";
import { authApi } from "@/features/auth/infrastructure/api/authApi";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setAuth = useSetAtom(authAtom);

  const hasSignupParams = searchParams.has("account_id");

  useEffect(() => {
    if (!hasSignupParams) return;

    authApi
      .fetchMe()
      .then((me) => {
        if (me.isRegistered) {
          setAuth({ status: "AUTHENTICATED", token: "" });
        }
        router.replace("/");
      })
      .catch(() => {
        router.replace("/");
      });
  }, [hasSignupParams, setAuth, router]);

  if (hasSignupParams) {
    return null;
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Defence Stocks
      </h1>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
