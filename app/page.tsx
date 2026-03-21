"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useSetAtom } from "jotai";
import { authAtom } from "@/features/auth/application/atoms/authAtom";
import { authApi } from "@/features/auth/infrastructure/api/authApi";
import HeroSection from "@/ui/components/HeroSection";
import { homePageStyles } from "@/ui/styles/homePageStyles";

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
    <div className={homePageStyles.container}>
      <HeroSection />
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
