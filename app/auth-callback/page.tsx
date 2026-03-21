"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authApi } from "@/features/auth/infrastructure/api/authApi";
import { userProfileStorage } from "@/features/auth/infrastructure/storage/userProfileStorage";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    authApi
      .fetchMe()
      .then((me) => {
        console.log("[AuthCallback] isRegistered:", me.isRegistered);
        console.log("[AuthCallback] nickname:", me.nickname);
        console.log("[AuthCallback] email:", me.email);

        if (!me.isRegistered) {
          userProfileStorage.save({
            nickname: me.nickname,
            email: me.email,
          });
          router.replace("/terms");
        } else {
          router.replace("/");
        }
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  return null;
}
