"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAtomValue } from "jotai";
import { isAuthenticatedAtom } from "@/features/auth/application/selectors/authSelectors";
import { navbarStyles, navItemStyles, authButtonStyles } from "@/ui/styles/navbarStyles";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  return (
    <nav className={navbarStyles.nav}>
      <Link href="/" className={navbarStyles.logo}>
        Defence Stocks
      </Link>

      <div className={navbarStyles.menuGroup}>
        {NAV_ITEMS.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`${navItemStyles.base} ${
                isActive ? navItemStyles.active : navItemStyles.inactive
              }`}
            >
              {label}
            </Link>
          );
        })}

        {isAuthenticated ? (
          <button
            type="button"
            className={`${authButtonStyles.base} ${authButtonStyles.logout}`}
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className={`${authButtonStyles.base} ${
              pathname === "/login"
                ? authButtonStyles.loginActive
                : authButtonStyles.loginInactive
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
